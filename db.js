const MongoClient=require("mongodb").MongoClient
const empdata=require("./emp.json")
const url="mongodb://localhost:27017"
MongoClient.connect(url, async (err, db) => {
    if (err) {
      console.error("Error while connecting", err)
      return
    }
    const database = db.db("Human_Resoure")
    const dbCollection = database.collection("employee")
  
    console.log("Connected to Mongo Database")
  
    const inserting = await database
      .collection("employee")
      .insertMany(empdata)
      console.log(inserting)
    console.log("inserting")

    const updating = await database
      .collection("employee")
      .updateMany({"salary": {$gt: "40000"}}, {$set: {"salary": "50000"}});
      console.log(updating);
      console.log("updating");
  
    const findsalary = await database
    .collection("employee")
    .find({"salary": {$gt: "30000"}}).toArray();
    console.log(findsalary);
    console.log("finding salary greater than 30000");
  
    const experince = await database
    .collection("employee")
    .find({"overallExp": {$gt: "2"}}).toArray();
    console.log(experince);
    console.log("experience greater than 2 years");

    const expyear = await database
    .collection("employee")
    .find({$and: [{"yearGrad": {$gt: "2017"}}, {"overallExp": {$gt: "1"}}]}).toArray();
    console.log(expyear);
    console.log("experiance greater than a year and graduation year is above 2017");

    const Deleteing = await database
    .collection("employee")
    .deleteMany({"lastCompany": "Z"});
    console.log(Deleteing);
    console.log("Deleteingvthe employee whose last company is Z");
  
    
})
