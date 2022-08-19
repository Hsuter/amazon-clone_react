const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51LLL4xEWXBkrZhni1vt9xGqJFDvgLWOBRhmBU7p4eJ3AYG49fvTK9VH8LlERbVlG9NTGDYW4CK3r0nS7ZNVLancA00TLshhBDH"
);
//App

//App config

const app = express();

//Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

//Api routes
app.get("/", (request, response) => response.status(200).send("fUCK yOU"));

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request recevive BOOM!!! for", total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen
exports.api = functions.https.onRequest(app);
