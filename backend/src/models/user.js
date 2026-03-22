import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    password: {
        type: String,
        required: true,
        select: false
    },
    email: { type: String, required: true },
    full_name: { type: String, required: true },
    avatar: { type: String, required: true }
})


const User = model("User", UserSchema)
export default User