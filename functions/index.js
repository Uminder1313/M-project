const functions = require('firebase-functions');

const express = require("express");
const cors= require("cors");
const stripe = require("stripe")("sk_test_51MgdMcSA0CUJmg32DfMRWgw0dMPeirciNp1jYwRhiZiINjroRoTs3M6rQ9x2bMchK5ycjJLXmzHGJr1vv68nyONr00FMtYf1MU")

// API



// App config
const app=express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// Api routes
app.get('/', (request, response) => response.status(200).send('Hello Kamal'))
app.post('/payments/create', async (request, response)=> {

    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Api listen
exports.api = functions.https.onRequest(app)




// const app = express();

// // - Middlewares
// app.use(cors({ origin: true }));
// app.use(express.json());

// // - API routes
// app.get("/", (request, response) => response.status(200).send("hello world"));

// app.post("/payments/create", async (request, response) => {
//   const total = request.query.total;

//   console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total, // subunits of the currency
//     currency: "usd",
//   });