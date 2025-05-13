import { createContext, useMemo, useState } from "react";
import { memo } from "react";
import { fetchCategory } from "../services/api";
import { useEffect } from "react";
export const AuthContext = createContext()


const AuthProvider = memo(({ children }) => {
    const [page, setPage] = useState("Home")
    const [categories,setCategories] = useState([])

    useEffect(() => {
        const loadCategories = async () => {
            const data = await fetchCategory();
            setCategories(data || []);
        };

        loadCategories();
    }, []);


    const changePage = (e) => {
        setPage(e.target.textContent)
    }


    return (
        <AuthContext.Provider value={{ categories, page, changePage }}>
            {children}
        </AuthContext.Provider>
    )

})

export default AuthProvider