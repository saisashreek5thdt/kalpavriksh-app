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
];

// Express initialization
const app = express();

// Configuring dotenv
require("dotenv").config();

// DB Connection
const {MongodbConnection} = require(path.join(__dirname, 'config', 'db'))

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
app.use(v1("users"), require(path.join(__dirname, "routes", "users")));
app.use(v1("patients"), require(path.join(__dirname, "routes", "patients")));
app.use(v1("diabetes"), require(path.join(__dirname, "routes", "diabetes")));

// app.use((req, res, next) => {
//   console.log("Welcome To Nodejs World");
// });


// Mongodb Connection
MongodbConnection().catch(console.error)

app.listen(process.env.PORT || 5000, () =>
  console.log(`Connection Esatblished At PORT ${process.env.PORT || 5000}`)
);