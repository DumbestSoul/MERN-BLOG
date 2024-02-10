import express from 'express';
import mongoose, { mongo } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express();

mongoose.connect(
    process.env.MONGO
    ).then(() => {
        console.log("Database is connected");
    }).catch((err) => {
        console.log(err)
    })


app.listen(3000, () => {
    console.log("Server is running in port 3000!")
})