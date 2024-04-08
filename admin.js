const {kafka} = require('./client');


async function init(){
    const admin = kafka.admin();
    console.log('Admin Connecting ...');
    admin.connect();
    console.log('Admin Connection Success');

    console.log('Creating topic [rider-updates]');
    await admin.createTopics({
        topics: [
            {
                topic:'rider-updates',
                numPartitions:2
            },
        ],
    })
    console.log("Topic Created [rider-updates]");


    console.log("Disconnectin Admin...");
    await admin.disconnect();
}

init();