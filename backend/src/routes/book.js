import { Router } from "express";
import Book from "../models/book.js";
import userCheck from "../middlewares/user.js"
import owner from "../middlewares/owner.js";
import upload from "../utils/multer.js";
import imagekit from "../utils/imagekit.js";


const router = Router()

router.get("/", async (req, res) => {
    const data = await Book.find()
    res.status(200).json(data)
})

router.post("/post", userCheck, upload.single('file'), async (req, res) => {
    const { title, description } = req.body

    imagekit.upload({
        file: req.file.buffer,
        fileName: req.file.originalname
    }, (err, result) => {
        if(err) res.status(500).send(err);
        else res.send(result);
    })

    const data = {
        title,
        description,
        file,
        author: req.user._id
    }
    const posted = await Book.create(data)
    return res.status(201).json({ message: "Successfully posted!!!", data: posted })
})

router.delete("/:id", userCheck, owner, async (req, res) => {
    try{
        await Book.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Successfully deleted book." })
    
    }catch(error) {
        console.log("Error in delete route: " + error)
        res.status(500).json({message: "Server error"})        
    }
})

router.patch("/:id", userCheck, owner, async (req, res) => {
    const { title, description, file } = req.book
    const Title = req.body.title ? req.body.title : title
    const Description = req.body.description ? req.body.description : description
    const File = req.body.file ? req.body.file : file
    const data = {
        title: Title,
        description: Description,
        file: File
    }
    const edited = await Book.findByIdAndUpdate(req.params.id, data, {returnDocument: "after"})
    res.status(200).json({ message: "Book Successfully changed", data: edited })
})


export default router