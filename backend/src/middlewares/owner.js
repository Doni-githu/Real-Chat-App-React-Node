import Book from "../models/book.js"

export default async function (req, res, next) {
    try {
        const user = req.user
        const id = req.params.id
        const book = await Book.findById(id)
        if(!book){
            return res.status(404).json({message: "Can not found your book or it's deleted"})
        }
        req.book = book
        if(book.author.toString() !== user._id.toString()){
            return res.status(403).json({message: "You are not the onwer of this book"})
        }

        next()
    } catch (error) {
        console.log( "Error in owner middelware" + error)
        return res.status(500).json({message: "Server error"})

    }
}