const amqp = require('amqplib/callback_api') // advanced message query protocol library

amqp.connect(`amqp://localhost`, (err, connection)=>{
    if(err){
        throw err;
    }
    connection.createChannel((err, channel)=>{
        if(err){
            throw err;
        }
        let queueName = "leeway";
      
        channel.assertQueue(queueName,{
            durable:false
        });
        channel.consume(queueName,(msg)=>{
            console.log(`Recieved: ${msg.content.toString()}`);
            // channel.ack(msg)
        },{
            noAck:true
        })
    })
})