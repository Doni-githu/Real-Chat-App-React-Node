import User from "../models/user.js"
import { Token } from "../utils/token.js"
export default async function(req, res, next) {
    try {
        if(!req.headers.authorization) {
            return res.status(403).json({message: "Unauthorizated"})
        }
        const token = req.headers.authorization.split(" ")[1]
        const data = Token.decode(token)
        const id = JSON.parse(data.payload.data)
        const user = await User.findById(id).select('-password')
        req.user = user
        next()
    } catch (error) {
        console.log('Error in user middelware' +  error)
        return res.status(500).json({message: "Server error"})
    }
}