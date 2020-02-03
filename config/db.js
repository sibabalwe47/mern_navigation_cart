const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })



const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('DB connected')
    } catch (err) {
        console.log(err)
    }
}


module.exports = dbConnection