import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import AuthRouter from "./routes/auth.js"
import BookRoutes from "./routes/book.js"

const app = express()

dotenv.config({quiet:true})

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use("/book", BookRoutes)
app.use("/auth", AuthRouter)


async function startServer() {
    try {
        const PORT = process.env.PORT || 5000

        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("MongoDB connected")

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`)
        })

    } catch (error) {
        console.error("Startup error:", error)
    }

}


startServer()