import { Link } from "react-router-dom"
import ShopNow from "../../Components/Shop-Now/Shop-Now-component"
import Green from "../../Components/Offers/Green"
import White from "../../Components/Offers/White"
import Deal from "../../Components/Offers/Deal"

const HomeIntro = () => {

    return (
      
            <div className=" w-full h-[600px] grid grid-rows-2 gap-[20px]  grid-cols-3 min-[375px]:flex min-[375px]:flex-col min-[375px]:w-full min-[375px]:items-center min-md:flex min-md:flex-col min-md:items-center">
                <Green />
                <White />
                <Deal />
            </div>
        

    )

}
export default HomeIntro