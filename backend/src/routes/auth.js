import { Router } from "express";
import bcrypt from "bcrypt"
import { Token } from "../utils/token.js"
import { checkEmailExists } from "../utils/email.js";
import User from "../models/user.js";
import { userWithoutPassword } from "../utils/index.js";

const router = Router()

router.post("/login", async (req, res) => {
    try {

        const { email, password } = req.body
        const exists = await User.findOne({email}).select('full_name email avatar password')

        if (!exists) {
            return res.status(404).json({ message: "The person with email not found." })
        }
        const isOkWithPassword = await bcrypt.compare(password, exists.password)
        if (!isOkWithPassword) {
            return res.status(400).json({ message: "Wrong password" })
        }

        const token = Token.encode(JSON.stringify(exists._id))
        const user = userWithoutPassword(exists)

        return res.status(200).json({
            message: "The person successfully log-in",
            user,
            token: token
        })

    } catch (error) {
        console.log("Login Error: ", error)
         
        return res.status(500).json({
            message: "Server error"
        })
    }
})


router.post("/sign-up", async (req, res) => {
    try {

        const { password, full_name, email, avatar } = req.body

        const existingUser = await checkEmailExists(email)
        if (existingUser) {
            return res.status(400).json({ message: "A user with this email already exists." })
        }
        const hashedPassoword = await bcrypt.hash(password, 10)

        const user = {
            full_name,
            email,
            avatar,
            password: hashedPassoword,
        }

        const createdUser = await User.create(user)
        const user2 = userWithoutPassword(createdUser)
        const token = Token.encode({ id: JSON.stringify(createdUser._id) })


        return res.status(200).json({
            message: "The person registered",
            user: user2,
            token: token
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: "Server error"
        })
    }
})





export default router