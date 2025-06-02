import { useContext } from "react"
import { AuthContext } from "../../context/context"

const PopularProductsBody = () => {
    const { popProducts } = useContext(AuthContext)
    return (
        <div>
            {
                popProducts.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={item.image} alt="" />
                            <span>
                                <h3>{item.name}</h3>
                                <h3>${item.price}</h3>
                            </span>
                            <button className="bg-[url('public/Home/Bag.png')]">

                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default PopularProductsBody