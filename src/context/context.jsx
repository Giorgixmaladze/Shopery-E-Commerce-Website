import { createContext, useMemo, useState } from "react";
import { memo } from "react";
import { fetchCategory, getIndexes } from "../services/api";
import { useEffect } from "react";
import { popularProducts } from "../services/list";
export const AuthContext = createContext()


const AuthProvider = memo(({ children }) => {
    const [page, setPage] = useState("Home")
    const [categories,setCategories] = useState([])
    const [popProducts,setPopProducts] = useState(getIndexes(popularProducts)||[])
    const [openedDetails,setOpenedDetails] = useState(false)
    const [selectedProduct,setSelectedProduct] = useState(null)

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

    const openDetails = (product) =>{
        setOpenedDetails(true)
        setSelectedProduct(product)
  
    }
    const closeDetails = () =>{
        setOpenedDetails(false)
       
    }

    return (
        <AuthContext.Provider value={{ categories, page, changePage,popProducts,openedDetails,openDetails,closeDetails,selectedProduct }}>
            {children}
        </AuthContext.Provider>
    )

})

export default AuthProvider