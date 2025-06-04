import { useContext } from "react"
import { AuthContext } from "../../context/context"

const PopularProductsBody = () => {
    const { popProducts } = useContext(AuthContext)
    return (
        <div className="grid grid-cols-5">
            {
                popProducts.map((item, index) => {
                    return (
                        <div className="border-1 border-gray-200 flex flex-col gap-[20px] items-center justify-center hover:border-mwvane hover:shadow-lg shadow-mwvane transition duration-200 hover:scale-105 bg-white" key={index}>
                            <img className="w-[200px]" src={item.image} alt="" />
                            <div className="flex justify-around w-full items-center">
                                <span>
                                    <h3>{item.name}</h3>
                                    <h3>${item.price}</h3>
                                    <p>Rating: {item.rating}</p>
                                </span>
                                <button className="bg-[url('/Home/Bag.png')] w-[40px] h-[40px] bg-no-repeat bg-center rounded-4xl bg-gray-300 hover:bg-[url('/Home/bag-white.png')] hover:bg-mwvane transition duration-200"></button>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}
export default PopularProductsBody