import { createContext, useMemo, useState } from "react";
import { memo } from "react";
export const AuthContext = createContext()


const AuthProvider = memo(({children}) =>{
    const[page,setPage] = useState("Home")

    const changePage = (e) => {
        setPage(e.target.textContent)
    }

    
    return(
        <AuthContext.Provider value={{page,changePage}}>
            {children}
        </AuthContext.Provider>
    )

})

export default AuthProvider