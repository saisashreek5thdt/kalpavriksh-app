const express = require("express");

const { MongoClient } = require("mongodb");

//const mongoose = require("mongoose");

const app = express();

app.use((req, res, next) => {
  console.log("Welcome To Nodejs World");
});

//Conncection URL
const url = "mongodb+srv://kalpavriksh:healthapp@kalpavriksh.rvtrlvy.mongodb.net/kalpavrikshapp?retryWrites=true&w=majority";
const client = new MongoClient(url);

//Database Name
const dbName = "kalpavriksh-app";

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected Successfully to Server");
    const db = client.db(dbName);
    const collection = db.collection("kalpavrikshapp");

    return "done";
}

main()
    .then(() => app.listen(5000))
    .catch(console.error)
    .finally(() => client.close());


/*
mongoose
  .connect(
    "mongodb+srv://kalpavriksh:healthapp@kalpavriksh.rvtrlvy.mongodb.net/kalpavrikshapp?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  }).catch((err) => {
    console.log(err);
  });
*/