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
app.get('/dog', (req, res) => {
  res.send('it works here')
})
app.get('/customer', async (req, res) => {
  //res.send('still connected to data base')
  const customer = new Customer({
    name: 'new customer',
    address: 'new address',
    email: 'customer1@new.com',
  })
  const output = await customer.save()
  res.send(customer)
})
