import { createContext, useState } from "react";

const RegContext = createContext();

export const RegProvider = ({children}) => {
    const [hide, setHide] =useState(true)

    const handlePassword = (e) => {
        setHide(!hide);
    }
    return(
        <RegContext.Provider value={{hide, handlePassword}}>
            {children}
        </RegContext.Provider>
    )
}
export default RegContext;