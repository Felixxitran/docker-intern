const express = require('express')
const res = require('express/lib/response')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()

mongoose
  .connect('mongodb://database:27017/test')
  .then(console.log('connected123'))
const customerSchema = new mongoose.Schema({
  name: String,
  address: String,
  email: String,
})

const Customer = mongoose.model('Customer', customerSchema)
app.listen(3000, () => {
  console.log(`app is running at ${process.pid}`)
})
app.get('/all', async (req, res) => {
  const output = await Customer.find()
    .then(() => res.send(output))
    .catch((error) => res.send(error))
})
app.get('/customer', async (req, res) => {
  //res.send('still connected to data base')
  const customer = new Customer({
    name: 'new customer',
    address: 'new address',
    email: 'customer1@new.com',
  })
  const output = await customer
    .save()
    .then(() => res.send(customer))
    .catch((error) => {
      res.send('error saving')
    })
})
