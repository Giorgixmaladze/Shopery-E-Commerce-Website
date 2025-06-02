import PopularProductsBody from "./PopularProductsBody"
import PopularProductsHeader from "./PopularProductsHeader"

const PopularProducts = () =>{

    return(
        <div className="w-11/12 flex flex-col">
            <PopularProductsHeader />
            <PopularProductsBody/>
        </div>
    )
}

export default PopularProducts