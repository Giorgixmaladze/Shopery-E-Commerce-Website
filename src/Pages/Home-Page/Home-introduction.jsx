import { Link } from "react-router-dom"
import ShopNow from "../../Components/Shop-Now/Shop-Now-component"
import Green from "../../Components/Offers/Green"
import White from "../../Components/Offers/White"
import Deal from "../../Components/Offers/Deal"

const HomeIntro = () => {

    return (

        <div className="
  w-full h-[600px] 
  min-lg:grid min-lg:grid-cols-3 min-lg:grid-rows-2 
  min-[375px]:flex min-[375px]:flex-col min-[375px]:items-center 
  min-md:flex min-md:flex-col min-md:items-center
        min-lg:gap-5
">
            <div className="min-lg:col-start-1 min-lg:col-end-3 min-lg:row-start-1 min-lg:row-end-3  ">
                <Green />
            </div>
            <div className="min-lg:col-start-3">
                <White />
            </div>
            <div className=" row-start-2 col-start-3 col-end-4">
                <Deal />
            </div>
        </div>


    )

}
export default HomeIntro