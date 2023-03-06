import { createContext, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = ({children}) => {
    const [state, setState] = useState({
        isOpen: false,
        type: 'success',
        message: ''
    })

    return (
        <AlertContext.Provider value={{...state,
            onOpen: (type, message) => setState({...state, isOpen:true, type, message }),
            onClose: () => setState({...state, isOpen:false, type: '', message:''})
        }}>
            {children}
        </AlertContext.Provider>
    )
}
export default AlertContext;
