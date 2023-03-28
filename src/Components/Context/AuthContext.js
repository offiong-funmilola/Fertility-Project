import { createContext, useContext} from "react";
// import {auth} from '../../config/firebase';
 
const AuthContext = createContext();

 export const AuthProvider = ({children, value}) => {
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
 };

 export const useAuthValue = () => {
    return useContext(AuthContext);
 }