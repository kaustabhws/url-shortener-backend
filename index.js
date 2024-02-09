const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = process.env.PORT || 5000;
app.use(cors())

app.use(express.json())

// Available Routes
app.use('/api', require('./routes/shorten'))
app.use('/api', require('./routes/redirect'))


app.listen(port, () => {
  console.log(`url shortener backend listening at http://localhost:${port}`)
})