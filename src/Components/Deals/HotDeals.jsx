import { useContext } from "react"
import CategoriesHeader from "../Popular/Categories-header"
import { AuthContext } from "../../context/context"


const HotDeals = () =>{
    const {randomDeals} = useContext(AuthContext)

    return(
        <div className="w-full bg-gray-100">
            <CategoriesHeader text="Hot Deals" />    
            {
                randomDeals.map((item,index) =>{
                    return(
                        <div>
                            <img src={item.image} alt="" />
                            <h2>{item.name}</h2>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default HotDeals