require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected!'))
  .catch(e => console.log('Error:', e.message))