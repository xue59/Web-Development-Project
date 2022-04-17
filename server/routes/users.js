const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.
recordRoutes.route("/users").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("users")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/users/:email").get(async function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { email: req.params.email };
  const data = await db_connect
    .collection("users")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you update a record by id.
recordRoutes.route("/users/:email").post(async (req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { email: req.params.email };
  let newvalues = {
    $set: {
      email: req.body.email,
      occupation: req.body.occupation,
      hobby: req.body.hobby,
    },
  };
  try {
    db_connect
      .collection("users")
      .updateOne(myquery, newvalues, { upsert: true }, function (err, res) {
        if (err) throw err;
        response.json(res);
      });
  } catch (err) {
    console.log(err);
  }
});

module.exports = recordRoutes;
