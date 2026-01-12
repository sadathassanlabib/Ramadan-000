import  { MongoClient, ServerApiVersion } from "mongodb"


function dbConnect(collectionName) {
    const MONGODB_URI = process.env.Mongodb_URI;
    console.log("MONGODB_URI:", MONGODB_URI);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

  return client.db(process.env.MONGODB_DB).collection(collectionName);
}

export default dbConnect;

