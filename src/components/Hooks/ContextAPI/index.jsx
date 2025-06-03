import { createContext, useContext } from "react";

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
    const myName = "khalid";
    const myAge = 21;
    return (
        <BioContext.Provider value={{ myName, myAge }}>
            {children}
        </BioContext.Provider>
    )
}

export const useBioContext = () => {
    const Context = useContext(BioContext);
    return Context;
}