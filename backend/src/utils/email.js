import User from "../models/user.js"

export async function checkEmailExists(email) {
    try {
        const existingUser = await User.findOne({ email: email });

        if (existingUser) {
            console.log('A user with this email already exists.');
            return true;
        } else {
            console.log('Email is available.');
            return false; 
        }
    } catch (err) {
        console.error('Error checking email existence:', err);
        throw err; 
    }
}
