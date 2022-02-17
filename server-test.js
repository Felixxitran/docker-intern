// const express = require('express')
// const res = require('express/lib/response')
// const mongoose = require('mongoose')
// require('dotenv').config()
// const cluster = require('cluster')

// const app = express()

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(console.log('connected'))
//   .catch((error) => console.log(error))
// const Cat = mongoose.model('Cat', { name: String })

// if (cluster.isMaster) {
//   for (let i = 0; i < 3; i++) {
//     cluster.fork()
//   }
// } else {
//   app.listen(3000, () => {
//     console.log(`app is running at ${process.pid}`)
//   })
// }
// app.get('/cat', (req, res) => {
//   //res.send('still connected to data base')

//   const kitty = new Cat({ name: 'Zildjian' })
//   kitty
//     .save()
//     .then(async () => {
//       const cats = await Cat.find()
//       res.send(cats)
//       console.log('sended')
//     })
//     .catch((error) => res.send(error))
// })
