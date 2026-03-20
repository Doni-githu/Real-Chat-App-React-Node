import { Router } from "express";
import bcrypt from "bcrypt"
import {Token} from "../utils/token.js"
import { checkEmailExists } from "../utils/email.js";
import User from "../models/user.js";

const router = Router()

router.post("/sign-up", async (req, res) => {
    const { password, full_name, email, avatar="avatar"} = req.body
        
    const exists = await checkEmailExists(email)
    const hashedPassoword = await bcrypt.hash(password, 10)

    const user = {
        full_name,
        email,
        avatar,
        password: hashedPassoword,
    }

    const createdUser = await User.create(user)
    const token = Token.encode(createdUser._id)
    return res.status(200).json({
        message: "The person registered",
        user: createdUser,
        token: token
    })
})


router.post("/sign-in", async (req, res) => {
    const {email, password} = req.body

    const exists = await User.find({email})
    if(!exists) {
        return res.status(404).json({message: "The person with email not found."})
    }

    const isOkWithPassword = await bcrypt.compare(password, exists.password)
    if (!isOkWithPassword) {
        return res.status(400).json({message: "Wrong password"})
    }

    const token = Token.encode(exists._id)

    return res.status(200).json({
        message: "The person successfully log-in",
        user: exists,
        token: token 
    })
})




export default router