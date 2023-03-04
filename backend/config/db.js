const mongoose = require("mongoose");


const databaseConnect = async()=>{
    try {
        const connec = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB Connected : ${connec.connection.host}`)
    } catch (error) {
        console.log(`Error : ${error.message}`);
        process.exit()
    }
}

module.exports = databaseConnect