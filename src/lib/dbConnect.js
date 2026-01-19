import  { MongoClient, ServerApiVersion } from "mongodb"



const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export async function getCollection(collectionName) {
  const client = await clientPromise;
  return client.db(dbName).collection(collectionName);
}


