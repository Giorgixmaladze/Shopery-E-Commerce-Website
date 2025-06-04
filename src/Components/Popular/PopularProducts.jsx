import PopularProductsBody from "./PopularProductsBody"
import PopularProductsHeader from "./PopularProductsHeader"

const PopularProducts = () =>{

    return(
        <div className="w-11/12 flex flex-col gap-[50px]">
            <PopularProductsHeader />
            <PopularProductsBody/>
        </div>
    )
}

export default PopularProducts