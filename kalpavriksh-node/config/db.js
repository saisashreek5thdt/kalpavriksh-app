const { MongoClient } = require("mongodb");

//Conncection URL
const url = process.env.MONGODB_URI;
const client = new MongoClient(url, {useNewUrlParser: true,useUnifiedTopology: true});

module.exports.MongodbConnection = async () => {
  try {
    await client.connect();
    console.log("Connection Established");
  } catch (err) {
    console.error(err);
  }
};

module.exports.client = client