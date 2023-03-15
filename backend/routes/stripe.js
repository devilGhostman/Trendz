require("dotenv").config();
const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", async (req, res) => {
  try {
    const line_items = req.body.products.map((product) => {
      return {
        price_data: {
          currency: "inr",
          product_data: {
            name: product.title,
            images: [product.img1],
          },
          unit_amount: product.price * 100,
        },
        quantity: product.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      shipping_address_collection: { allowed_countries: ["IN"] },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 0, currency: "inr" },
            display_name: "Free shipping",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 5 },
              maximum: { unit: "business_day", value: 7 },
            },
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 50 * 100, currency: "inr" },
            display_name: "Next Day",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 1 },
              maximum: { unit: "business_day", value: 1 },
            },
          },
        },
      ],
      phone_number_collection: {
        enabled: true,
      },
      line_items,
      mode: "payment",
      success_url: process.env.CLIENT_URL + "/successorder",
      cancel_url: process.env.CLIENT_URL + "/cart?success=false",
    });
    res.status(200).json(session);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
