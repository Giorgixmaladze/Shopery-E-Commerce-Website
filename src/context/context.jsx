import { createContext, useMemo, useState } from "react";
import { memo } from "react";
import { fetchCategory, getIndexes } from "../services/api";
import { useEffect } from "react";
import { popularProducts } from "../services/list";
import deals from "../services/hotDeals";
export const AuthContext = createContext()


const AuthProvider = memo(({ children }) => {
    const [page, setPage] = useState("Home")
    const [categories, setCategories] = useState([])
    const [popProducts, setPopProducts] = useState(getIndexes(popularProducts) || [])
    const [openedDetails, setOpenedDetails] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const hotDeals = deals
    let randomDeals = new Set()
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

    const openDetails = (product) => {
        setOpenedDetails(true)
        setSelectedProduct(product)

    }
    const closeDetails = () => {
        setOpenedDetails(false)

    }

    const getRandomDeals = () => {
        let index = 0
        while (randomDeals.size < 10) {
            index = (Math.random() * hotDeals.length - 2).toFixed(0)
            if (index >= 0) {
                randomDeals.add(hotDeals[index])
            }

        }

        randomDeals = Array.from(randomDeals)
        console.log(randomDeals)

    }
    getRandomDeals()

    return (
        <AuthContext.Provider value={{ categories, page, changePage, popProducts, openedDetails, openDetails, closeDetails, selectedProduct, randomDeals }}>
            {children}
        </AuthContext.Provider>
    )

})

export default AuthProvider