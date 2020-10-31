const amqp = require("amqplib/callback_api");

const { USER_ACTIVITY } = require("../../../../utils/constants");
const logger = require("../../../../utils/custom-stdout-logging");
const { cradle } = require("../activity-ioc-container");

const handleActivitySubscribeError = (err) => {
  const error = new Error(err);
  logger.error({ message: error.message, stacktrace: error.stack });
  throw error;
};

amqp.connect(`amqp://${process.env.RABBITMQ_HOST}`, (err, connection) => {
  if (err) handleActivitySubscribeError(err);

  connection.createChannel((error, channel) => {
    if (error) handleActivitySubscribeError(error);

    channel.assertExchange(USER_ACTIVITY, "fanout", {
      durable: false,
    });
    channel.assertQueue(
      "",
      {
        exclusive: true,
      },
      (error1, q) => {
        if (error1) handleActivitySubscribeError(error1);

        channel.bindQueue(q.queue, USER_ACTIVITY, "");
        channel.consume(
          q.queue,
          (msg) =>
            msg.content
              ? cradle.activityService.insertActivity(msg.content.toString())
              : handleActivitySubscribeError("Message's content not found"),
          {
            noAck: true,
          }
        );
      }
    );
  });
});
