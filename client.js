const {Kafka} = require('kafkajs')

exports.kafka = new Kafka({
    clientId:"my-app",
    brokers: ["192.168.31.87:9092"]
})