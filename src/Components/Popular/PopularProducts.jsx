import PopularProductsBody from "./PopularProductsBody"
import PopularProductsHeader from "./PopularProductsHeader"

const PopularProducts = () =>{

    return(
        <div className="w-11/12 flex flex-col gap-[50px] min-md:w-8/12 min-xl:w-10/12">
            <PopularProductsHeader />
            <PopularProductsBody/>
        </div>
    )
}

export default PopularProducts