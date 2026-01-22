import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbname = process.env.DBNAME;

export const Collections = {
  PRODUCTS: "products",
};

let clientPromise;

if (!global._mongoClientPromise) {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export const dbconnect = async (cname) => {
  const client = await clientPromise;
  return client.db(dbname).collection(cname);
};
