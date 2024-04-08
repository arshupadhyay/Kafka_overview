// const { kafka } = require("./client");
// const group = process.argv[2];

// async function init() {
//   const consumer = kafka.consumer({ groupId: group });
//   await consumer.connect();

//   await consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });

//   await consumer.run({
//     eachMessage: async ({ topic, partition, message}) => {
//       console.log(
//         `${group}: [${topic}]: PART:${partition}:`,
//         message.value.toString()
//       );
//     },
//   });
// }

// init();


const { kafka } = require('./client');

async function init() {
    const group = process.argv[2];
    if (!group) {
        console.error('Please provide a consumer group ID.');
        process.exit(1);
    }

    const consumer = kafka.consumer({ groupId: group });
    await consumer.connect();
    console.log('Consumer connected successfully');

    await consumer.subscribe({ topic: 'rider-updates', fromBeginning: true });

    await consumer.run({
        eachMessage: async({ topic, partition, message }) => {
            console.log(`[${topic}] : PART${partition} - ${message.key}:`, message.value.toString());
        },
    });
}

init();
