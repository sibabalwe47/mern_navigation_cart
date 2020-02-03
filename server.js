const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const db = require('./config/db')

dotenv.config({ path: './config/config.env' })

// DB connection

db();

// Init server app


const app = express();


// middleware setup

app.use(express.json({ extended: false }))
app.use(cors())


// Routes & Route Files

app.use('/api/products', require('./routes/api/products'))


// Listen on port


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))

