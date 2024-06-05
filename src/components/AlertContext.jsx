import React, { useState,createContext,useContext } from 'react'


const AlertContext = createContext();
export const AlertProvider = ({children}) => {

    const [open, setOpen] = useState(false);



    return (<AlertContext.Provider value={{open,setOpen}}>
        {children}
    </AlertContext.Provider>)

}

export const useAlert = () => useContext(AlertContext);