require("dotenv").config();
const express = require('express');
const cors = require("cors");
const morgan = require("morgan");
const { MongoClient } = require("mongodb");

const { bodyValidation } = require("./utils");

MongoClient.connect(process.env.MONGO_URL)
  .then(client => {
    console.log("Connected to mongoDB.");
    app.locals.collection = client.db('getir-case-study').collection('records');
    app.listen(3000, () => console.log('Express server started.'));
  })
  .catch(error => console.log(` MongoDB connection error:\n ${error}`));


const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.post('/', (req, res) => {
  const { value, error } = bodyValidation.validate(req.body);
  if (error)
    return res.status(400).json(error.details[0].message)
});