import React, {createContext, useContext, useState, useEffect} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState(null);
    
    const Login = (userData) => {
        setIsLogged(true);
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const Logout = () => {
        setIsLogged(false);
        setUser(null);
        localStorage.removeItem("user");
    };

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"))
        if(storedUser) {
            setIsLogged(true);
            setUser(storedUser);
        }
    }, []);

    return (
        <AuthContext.Provider value={{isLogged, user, Login, Logout}}>
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => {
    return useContext(AuthContext);
};