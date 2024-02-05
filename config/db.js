const mongoose =require("mongoose");
const colors = require("colors");


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Mongodb database successfully ${mongoose.connection.host}`.bgMagenta.white);
    }catch (error){
        console.log(`MONGO Connect Errror ${error}`.bgRed.white);
    }
}


module.exports = connectDB ;