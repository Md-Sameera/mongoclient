const express = require("express");
const app = express();

const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) console.log(err);
  else {
    // console.log("Connected Successfully");
    var database = db.db("Human_Resource");
    var dbcollection = database.collection("employee") ;
    console.log("Connected to mongo database")
    // database.createCollection("items2", (err, suc) => {
    //   console.log("collection created");
    //   db.close();
    // });
    // db.close();
  }
});
app.get("/insertOne" , function (req , res) {
   const emp1 ={ firstName: "Simran", lastName: "Bhatiya", salary: "60000", department: "HR", lastCompany: "Z", lastSalary: "45000", overallExp: "3",   contactInfo: "9839876560",   yearGrad: "2017", gradStream: "CIVIL" };
   dbcollection.collection("employee").insertOne(emp1 , (err , res)=>{
    if (err) {
      console.log(error);
    }
    console.log("inserted");
    res.send("inserted");
   });
});
app.get("/findOne" , function (req , res) {
  dbcollection.collection("employee").insertOne({} , (err , suc)=>{
   if (err) {
     console.log(error);
   }
   else{
    res.json(suc);
   }
  });
});

app.listen(41111);