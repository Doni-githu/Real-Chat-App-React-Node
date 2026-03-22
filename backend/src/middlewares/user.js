import User from "../models/user"
import { Token } from "../utils/token"
export default async function(req, res, next) {
    if(!req.headers.authorization) {
        return res.status(403).json({message: "Unauthorizated"})
    }
    const token = req.headers.authorization.split(" ")[1]

    const data = Token.decode(token)
    const user = await User.findById(data.payload.id).select('-password')
    req.user = user
    next()
}