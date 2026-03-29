import jwt from "jsonwebtoken"

export const Token = {
    decode: (token) => {
        return jwt.decode(token, {complete: true})
    },
    encode: (user) => {
        return jwt.sign({data: user}, process.env.JWT_SECRET, {expiresIn: "7d"})
    }   
}