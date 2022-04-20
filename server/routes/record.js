const express = require("express");



// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("inventories");
  db_connect
    .collection("records")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a list of all the records.
recordRoutes.route("/shipmentRequest").get(function (req, res) {
  let db_connect = dbo.getDb("inventories");
  db_connect
    .collection("shippings")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a list of all the records.
recordRoutes.route("/search/:itemName").get(function (req, res) {
  let db_connect = dbo.getDb("inventories");
  db_connect
    .collection("records")
    .find({"itemName":req.params.itemName})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("records").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you get a single record by id
recordRoutes.route("/shipmentRequest/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("shippings").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    itemName: req.body.itemName,
    img: req.body.img,
    currentQuantity: req.body.currentQuantity,
    subTeams: req.body.subTeams,
    region: req.body.region,
    warehouseLocation: req.body.warehouseLocation,
    notes: req.body.notes,
  };
  db_connect.collection("records").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// add shipping
recordRoutes.route("/shipmentRequest/add").post(async function (req, response) {

  let myobj1 = {
    receiverName: req.body.receiverName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    subTeams: req.body.subTeams,
    region: req.body.region,
    expDeliverDate: req.body.expDeliverDate,
    street: req.body.street,
    address2: req.body.address2,
    province: req.body.province,
    city: req.body.city,
    postcode: req.body.postcode,
    manifestList: req.body.manifestList,
  };

  await dbo.getDb().collection("shippings").insertOne(myobj1);



//////////////////// 改shipping ////////////////////


  try {
    for (let i = 0; i < req.body.manifestList.length; i++) {

      let myquery = { _id: ObjectId(req.body.manifestList[i].newitemId) };
      let newvalues = {
        $set: {
          currentQuantity: req.body.manifestList[i].currentQuantiry - req.body.manifestList[i].requestAmount,
        },
      };

      await dbo.getDb()
      .collection("records")
      .updateOne(myquery, newvalues);
    }

  } catch (err) {
    console.log(err);
  }
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(async (req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      itemName: req.body.itemName,
      img: req.body.img,
      currentQuantity: req.body.currentQuantity,
      subTeams: req.body.subTeams,
      region: req.body.region,
      warehouseLocation: req.body.warehouseLocation,
      notes: req.body.notes,
    },
  };
  try {
    db_connect
      .collection("records")
      .updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        response.json(res);
      });
  } catch (err) {
    console.log(err);
  }
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

// This section will help you delete a record
recordRoutes.route("/shipmentRequest/delete/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("shippings").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;
