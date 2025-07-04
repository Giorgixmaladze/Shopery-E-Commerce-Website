import { useContext } from "react"
import { AuthContext } from "../../context/context"
import ProductDetails from "../Product Details/ProductDetails"
const PopularProductsBody = () => {
    const { popProducts, openedDetails, openDetails } = useContext(AuthContext)
    return (
        <div className="grid grid-cols-5 min-[375px]:grid-cols-2 min-md:grid-cols-3">
            {
                popProducts.map((item, index) => {
                    return (
                        <div onClick={() => openDetails(item)} className="border-1 border-gray-200 flex flex-col gap-[20px] items-center justify-center hover:border-mwvane hover:shadow-lg shadow-mwvane transition duration-200 hover:scale-105 bg-white" key={index}>
                            <img className="w-[150px]" src={item.image} alt="" />
                            <div className="flex justify-around w-full items-center">
                                <span>
                                    <h3 className="min-md:text-2xl text-gray-600">{item.name}</h3>
                                    <h3 className="text-mwvane">${item.price}</h3>
                                    <p className="flex items-center">Rating: <span class="material-symbols-outlined text-amber-500">
                                        star_half
                                    </span> {item.rating}</p>
                                </span>
                                <button className="bg-[url('/Home/Bag.png')] w-[40px] h-[40px] bg-no-repeat bg-center rounded-4xl bg-gray-300 hover:bg-[url('/Home/bag-white.png')] hover:bg-mwvane transition duration-200"></button>

                            </div>

                        </div>
                    )
                })
            }
            {openedDetails && (<ProductDetails />)}

        </div>
    )
}
export default PopularProductsBody