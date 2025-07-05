import { useEffect } from "react"
import ViewAll from "./ViewAll"
import { popularProducts } from "../../services/list"
import { getIndexes } from "../../services/api"
import PopularProductsBody from "./PopularProductsBody"

const PopularProductsHeader = () =>{
    return(
        <div className="flex justify-between items-center min-[375px]:flex-col min-lg:flex-row">
           <h1 className="text-[38px] font-bold">Popular Products</h1>
           <ViewAll /> 
        </div>
    )


}
export default PopularProductsHeader