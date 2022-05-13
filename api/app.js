const express = require('express')
const stripe = require('stripe')('sk_test_51KyzN8CF8LXgMIUQvxAtPLwo6muzCNkaLfOOYZWN0NGO65G0vMbvapIOsvoAlbIRGemSmeaFa645AFTo59m08LME00RDGydNLC')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/api/', (req, res) => {
    res.json({ message: 'Welcome to Marbl API' })
})

app.post('/api/pay', async (req, res) => {
    const { amount } = req.body
    const intent = await stripe.paymentIntents.create({
        amount,
        currency: 'pln',
        payment_method_types: ['card'],
    })
    res.json({client_secret: intent.client_secret})
})

module.exports = app
