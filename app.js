const express = require("express");


const app = express();

const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv/config');

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//Middlewares-running a function everytime we hit

// app.use('/posts', () => {
//     console.log("This is a middleware running");
// })

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const uri = process.env.DB_CONNECTION;

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

//ROUTES

app.get('/', (req, res) => {
    res.send('The app is working');
})



//How to start litening to the server

app.listen(3000);