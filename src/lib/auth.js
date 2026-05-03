import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";


const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("Online-Shop");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),

  emailAndPassword: {
    enabled: true,
  },
});