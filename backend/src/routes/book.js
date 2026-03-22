import { Router } from "express";
import Book from "../models/book.js"

const router = Router()

router.get("/", async (req, res) => {
    const data = await Book.find()
    res.status(200).json(data)
})


export default router