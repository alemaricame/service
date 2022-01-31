var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override");
mongoose = require("mongoose");
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();
require("./routes/routes")(app);

const db = require("./models");
const http = require("http");

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Mongo connect...')
  })
  .catch(err => {
    console.log('Error Mongo connect...', err)

    process.exit();
  });

app.use(router);

app.get('', (req, res) => {
  res.send('Conectado...')
})

var cors = require('cors')

const allowedOrigins = [
  'capacitor://localhost',
  'ionic://localhost',
  'http://localhost',
  'http://localhost:8080',
  'http://localhost:8100'
];
// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Origin not allowed by CORS'));
    }
  }
}

// Enable preflight requests for all routes
app.options('*', cors(corsOptions));
// app.set('port', 5050);
var port = 8000;

app.listen(8000, function () {
  console.log("Node server running on http://localhost:8000");
});

// var cors_proxy = require('cors-anywhere');
// cors_proxy.createServer({
//     originWhitelist: [], // Allow all origins
//     requireHeader: ['origin', 'x-requested-with'],
//     removeHeaders: ['cookie', 'cookie2']
// }).listen(5050, 'localhost', function() {
//     console.log('Running CORS Anywhere on ' + 'localhost' + ':' + 5050);
// });

// server.listen(3000, 'https://poc-server-revista.herokuapp.com', () => {
//   console.log(`Server is running on http://${host}:${port}`);
// });

// server.on('clientError', (err, socket) => {
//   console.error(err);
//   socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
// });

