import { createContext, useState } from "react";

export const UserDataContext = createContext()

const UserContextProvider = async({
    children
}) => {
    const [user,SetUser] = useState([])
    return(
        <UserDataContext.Provider value={user,SetUser}>
            {children}
        </UserDataContext.Provider>
    )
}