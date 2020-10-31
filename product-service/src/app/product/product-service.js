module.exports = class ProductService {
  constructor({ productDb, amqp, logger, USER_ACTIVITY }) {
    this.productDb = productDb;
    this.amqp = amqp;
    this.logger = logger;
    this.USER_ACTIVITY = USER_ACTIVITY;
  }

  products(page, perPage, sortBy, categoryId, nameTerm) {
    return this.productDb.products(
      page,
      perPage,
      ProductService.getDbOrderType(sortBy),
      categoryId,
      nameTerm
    );
  }

  publishUserActivity(userAgent, queryParams, clientIp) {
    this.amqp.connect(
      `amqp://${process.env.RABBITMQ_HOST}`,
      (err, connection) => {
        if (err) this.handleActivityPublishError(err);

        connection.createChannel((error, channel) => {
          if (error) this.handleActivityPublishError(err);
          channel.assertExchange(this.USER_ACTIVITY, "fanout", {
            durable: false,
          });
          channel.publish(
            this.USER_ACTIVITY,
            "",
            Buffer.from(JSON.stringify({ userAgent, queryParams, clientIp }))
          );
        });

        setTimeout(() => {
          connection.close();
        }, 500);
      }
    );
  }

  static getDbOrderType(sortBy) {
    switch (sortBy) {
      case "NAME_ASC":
        return [["name", "ASC"]];
      case "NAME_DESC":
        return [["name", "DESC"]];
      case "PRICE_ASC":
        return [["price", "ASC"]];
      case "PRICE_DESC":
        return [["price", "DESC"]];
      case "CREATED_DATE_ASC":
        return [["createdAt", "ASC"]];
      case "CREATED_DATE_DESC":
        return [["createdAt", "DESC"]];
      default:
        return [["name", "ASC"]];
    }
  }

  handleActivityPublishError(err) {
    const error = new Error(err);
    this.logger.error({ message: error.message, stacktrace: error.stack });
    throw error;
  }
};
