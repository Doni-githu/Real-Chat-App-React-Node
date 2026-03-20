import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import AuthRouter from "./routes/auth.js" 
dotenv.config({quiet:true})

const app = express()


app.use(express.json())
app.use(cors())
app.use("/auth", AuthRouter)


async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("MongoDB connected")
        app.listen(process.env.PORT, () => {
            console.log(`App running on port http://localhost:${process.env.PORT}`)
        })
    } catch (error) {
        console.log(error)
    }

}


startServer()