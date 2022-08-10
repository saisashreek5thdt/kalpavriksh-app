// NPM modules
const [
  express,
  path,
  sanitize,
  helmet,
  xss,
  rateLimit,
  hpp,
  compression,
  cors,
  { MongoClient },
] = [
  require("express"),
  require("path"),
  require("express-mongo-sanitize"),
  require("helmet"),
  require("xss-clean"),
  require("express-rate-limit"),
  require("hpp"),
  require("compression"),
  require("cors"),
  require("mongodb"),
];

//const mongoose = require("mongoose");

// Express initialization
const app = express();

// Configuring dotenv
require("dotenv").config();

// Middlewares
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(sanitize());
app.use(helmet());
app.use(xss());
app.use(hpp());
app.use(compression());
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100,
});
app.use(limiter);

// Versioning app
const v1 = (route) => `/api/v1/${route}/`;

// Routes
app.use(v1('users'), require(path.join(__dirname, 'routes', 'users')))
app.use(v1('patients'), require(path.join(__dirname, 'routes', 'patients')))

// app.use((req, res, next) => {
//   console.log("Welcome To Nodejs World");
// });

//Conncection URL
const url =
  "mongodb+srv://kalpavriksh:healthapp@kalpavriksh.rvtrlvy.mongodb.net/kalpavrikshapp?retryWrites=true&w=majority";
const client = new MongoClient(url);

//Database Name
const dbName = "kalpavriksh-app";

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log("Connected Successfully to Server");
//   const db = client.db(dbName);
//   const collection = db.collection("kalpavrikshapp");
//   return "done";
// }

// main()
//   .then(() => app.listen(5000))
//   .catch(console.error)
//   .finally(() => client.close());

app.listen(process.env.PORT || 5000, () => console.log(`Connection Esatblished At PORT ${process.env.PORT || 5000}`))

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
