import { createContext, useReducer } from "react"
export const USER_UPDATE = "USER_UPDATE"


const defaultValue = {
    user: {},
    isLogin: false
}

export const AuthContext = createContext(defaultValue)


const reducer = (stete, action) => {
    switch (action.type) {
        case USER_UPDATE:
            return { ...stete, user: action.payload }

        default:
            break;
    }
}


function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, defaultValue)

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider