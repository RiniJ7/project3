import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const app = express()
const PORT = 5000

app.use(express.json())
app.listen(PORT,()=> console.log(`listening on ${PORT}`))


await mongoose.connect(process.env.MONGO_URL)
console.log('we are connected to mongo db')