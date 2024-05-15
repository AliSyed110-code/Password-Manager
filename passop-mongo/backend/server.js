import express from "express";
import { MongoClient } from "mongodb";
import "dotenv/config";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(cors());
// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "passop";
await client.connect();
console.log("Connected successfully to server");

// Get all the passwords
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});

// Save a password
app.post("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const insert = await collection.insertOne(password);
  res.send({ succes: true, result: insert });
});

// Delete a password

app.delete("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const deleted = await collection.deleteOne(password);
  res.send({ succes: true, result: deleted });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});