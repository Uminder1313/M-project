const functions = require("firebase-functions");

const express = require("express")
const cors = require("cors")
const stripe = require("stripe")('sk_test_51MgdMcSA0CUJmg32DfMRWgw0dMPeirciNp1jYwRhiZiINjroRoTs3M6rQ9x2bMchK5ycjJLXmzHGJr1vv68nyONr00FMtYf1MU')

// API 


// App config
const app= express()

// Middlewares
app.use(cors({origin : true}))
app.use(express.json())

// API routes
app.get('/', (request, response) => response.status(200).send('Hello world'))

app.post('/payments/create', async(request, response) => {
    const total = request.query.total

    console.log('Payment request received....', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency: "INR",
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})
// Listen command
exports.api = functions.https.onRequest(app)


// http://127.0.0.1:5001/clone-3431d/us-central1/api