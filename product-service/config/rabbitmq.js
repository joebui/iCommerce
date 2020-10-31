const amqp = require('amqplib/callback_api');

amqp.connect(`amqp://${process.env.RABBITMQ_HOST}`, (err, connection) => {
  if (err) throw err;

  connection.createChannel((error, channel) => {
    if (error) throw error;
    channel.assertExchange('logs', 'fanout', { durable: false });
    channel.publish('logs', '', Buffer.from('Hello World!'));
  });
});
