import { createContext, useMemo, useState, useEffect } from "react";
import { fetchCategory, getIndexes } from "../services/api";
import { popularProducts } from "../services/list";
import deals from "../services/hotDeals";
import { memo } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [page, setPage] = useState("Home");
    const [categories, setCategories] = useState([]);
    const [openedDetails, setOpenedDetails] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const popProducts = useMemo(() => getIndexes(popularProducts) || [], []);


    useEffect(() => {
        const loadCategories = async () => {
            const data = await fetchCategory();
            setCategories(data || []);
        };
        loadCategories();
    }, []);

    const randomDeals = useMemo(() => {
        const set = new Set();
        while (set.size < 8) {
            const index = Math.floor(Math.random() * deals.length);
            set.add(deals[index]);
        }
        return Array.from(set);
    }, []);


    const changePage = (e) => setPage(e.target.textContent);
    const openDetails = (product) => {
        setOpenedDetails(true);
        setSelectedProduct(product);
    };
    const closeDetails = () => setOpenedDetails(false);

    return (
        <AuthContext.Provider
            value={{
                categories,
                page,
                changePage,
                popProducts,
                openedDetails,
                openDetails,
                closeDetails,
                selectedProduct,
                randomDeals
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default memo(AuthProvider);