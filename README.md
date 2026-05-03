auth
 // path to your auth file

import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";


export const { POST, GET } = toNextJsHandler(auth);

.env
BETTER_AUTH_SECRET=zmhz4M1v01XXD8lWIlwax2W3F6wJYLmy
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=mongodb+srv://a-8-suncard:gHWPtFOgi23F1Jo4@cluster0.hhoc4ks.mongodb.net/?appName=Cluster0

route.js
 // path to your auth file

import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";


export const { POST, GET } = toNextJsHandler(auth);

auth.js
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db();

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    database: mongodbAdapter(db, {
        // Optional: if you don't provide a client, database transactions won't be enabled.
        client
    }),
});
