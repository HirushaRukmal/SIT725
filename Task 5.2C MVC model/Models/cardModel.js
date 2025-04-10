const { MongoClient } = require('mongodb');

const MONGO_URI =
    "mongodb+srv://kema94:nxtadmin12345@cluster1.aolkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

const client = new MongoClient(MONGO_URI, { useNewUrlParser: true });

let projectCollection;

const connectDB = async () => {
    try {
        await client.connect();
        projectCollection = client.db().collection("dogs");
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
    }
};

const insertCard = (card) => {
    return projectCollection.insertOne(card);
};

const getAllCards = () => {
    return projectCollection.find({}).toArray();
};

module.exports = {
    connectDB,
    insertCard,
    getAllCards,
};
