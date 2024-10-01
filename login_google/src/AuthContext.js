import React, {createContext, useContext, useState, useEffect, Children} from "react";

const AuthContext = createContext();

export const AuthProvider = ({Children}) => {
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState(null);
    
    const Login = (userData) => {
        setIsLogged(true);
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData))
    }

    const Logout = () => {
        setIsLogged(false);
        setUser(null);
        localStorage.removeItem("user");
    }

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"))
        if(storedUser) {
            setIsLogged(true);
            setUser(storedUser);
        }
    }, [])

    return (
        <AuthContext.AuthProvider value={{isLogged, user, Login, Logout}}>
            {Children}
        </AuthContext.AuthProvider>
    )

}

export const useAuth = () => {
    return useContext(AuthContext)
}