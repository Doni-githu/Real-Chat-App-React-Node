import jwt from "jsonwebtoken"

export const Token = {
    decode: (token) => {
        return jwt.verify(token, process.env.JWT_SECRET)
    },
    encode: (user) => {
        return jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: "7d"})
    }   
}