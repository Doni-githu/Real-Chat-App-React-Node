import jwt from "jsonwebtoken"

export const Token = {
    decode: (token) => {
        return jwt.decode(token, {complete: true})
    },
    encode: (string) => {
        return jwt.sign(string, "gray123")
    }
}