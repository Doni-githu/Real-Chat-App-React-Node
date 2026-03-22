export const userWithoutPassword = (user) => {
    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;
    return userWithoutPassword
}