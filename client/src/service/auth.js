import axios from "./axios";

export const AuthService = {
    login: (user) => {
        return axios.post("/auth/login", user)
    },
    register: (user) => {
        return axios.post("/auth/sign-up", user)
    }
}

