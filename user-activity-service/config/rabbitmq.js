const amqp = require('amqplib/callback_api');

amqp.connect('amqp://rabbitmq', (error0, connection) => {
  if (error0) throw error0;

  connection.createChannel((error1, channel) => {
    if (error1) throw error1;
    channel.assertExchange('logs', 'fanout', { durable: false });
    channel.publish('logs', '', Buffer.from('Hello World!'));
  });
});
