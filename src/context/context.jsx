import { createContext, useMemo, useState, useEffect } from "react";
import { fetchCategory, getIndexes } from "../services/api";
import { popularProducts } from "../services/list";
import deals from "../services/hotDeals";
import { memo } from "react";
import testimonials from "../services/testimonials";

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




    let testimonialIndex = 0
    let currentTestimonials = []
    const showTestimonial = (newIndex) =>{
        testimonialIndex = newIndex
        if(testimonialIndex >= testimonials.length){
            testimonialIndex = 0
        }else if(testimonialIndex < 0){
            testimonialIndex = testimonials.length-1
        }else{
            currentTestimonials = [testimonials[testimonialIndex], testimonials[testimonialIndex + 1], testimonials[testimonialIndex + 2]]
        }
    }

    const nextTestimonial = () =>{
        testimonialIndex ++
        showTestimonial(testimonialIndex)
    }
    const previousTestimonial = () =>{
        testimonialIndex --
        showTestimonial(testimonialIndex)
    }

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
                randomDeals,
                showTestimonial,
                nextTestimonial,
                previousTestimonial
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default memo(AuthProvider);