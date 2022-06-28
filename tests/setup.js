const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongo = undefined;

module.exports.setUp = async () => {
    mongo = await MongoMemoryServer.create();
    const uri = mongo.getUri();

    await mongoose.connect(uri, {
        useNewUrlParser: true,
    });
}

module.exports.dropDatabase = async () => {
    if(mongo){
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongo.stop();
    }
}

module.exports.dropCollections = async () => {
    if(mongo){
        const collections = mongoose.connection.collections;

        for(const key in collections){
            const collection = collections[key];
            await collection.deleteMany();
        }
    }
}