import  { MongoClient, ServerApiVersion } from "mongodb"


function dbConnect(collectionName) {
    const MONGODB_URI = process.env.MONGODB_URI;
   

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

