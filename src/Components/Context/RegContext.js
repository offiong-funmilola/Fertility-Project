import { createContext, useState } from "react";

const RegContext = createContext();

export const RegProvider = ({children}) => {
    const [type, setType] =useState('password')
    const [hide, setHide] =useState(true)

    const handlePassword = (e) => {
        setHide(!hide);
        if(hide){
            setType('text');
        }
        if(!hide){
            setType('password');
        }
    }
    return(
        <RegContext.Provider value={{hide, type, handlePassword}}>
            {children}
        </RegContext.Provider>
    )
}
export default RegContext;