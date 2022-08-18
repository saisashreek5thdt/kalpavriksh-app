const { MongoClient } = require("mongodb");
//Conncection URL
const url ="mongodb+srv://kalpavriksh:healthapp@kalpavriksh.rvtrlvy.mongodb.net/kalpavrikshapp?retryWrites=true&w=majority";
exports.client = new MongoClient(url);

//Database Name
exports.dbName = "kalpavriksh-app";
