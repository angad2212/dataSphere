const express = require('express');
const bodyParser = require('body-parser'); 
//body-parser: Parses incoming request bodies in middleware, making it easier to handle form data in Node.js applications.
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
//morgan: HTTP request logger middleware for Node.js, providing information about incoming requests 
//for debugging and logging purposes.
const multer = require('multer');
//multer: It helps you manage files that users upload to your website.
const helmet = require('helmet');
//helmet: Helps secure Express apps by setting various HTTP headers to protect against common web vulnerabilities.

//configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use(helemt());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

//file storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
const upload = multer({ storage });
//anytime we need to uplaod a file, we will be using this 'upload' variable

//how multer handles:
//You're telling Multer how and where to store these files using diskStorage. 
//It's like giving Multer instructions on how to handle these files.

//destination: This tells Multer that when someone uploads a file, 
//it should put that file in the public/assets box.

//filename: This tells Multer how to name the file when it's saved. 
//It uses the original name of the file that the user uploaded.