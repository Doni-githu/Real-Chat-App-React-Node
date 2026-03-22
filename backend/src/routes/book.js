import { Router } from "express";
import Book from "../models/book.js";
import userCheck from "../middlewares/user.js"

const router = Router()

router.get("/", async (req, res) => {
    const data = await Book.find()
    res.status(200).json(data)
})

router.post("/post", userCheck, async (req, res) => {
    console.log(req.body)
})


export default router