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
        min-xl:w-10/12
">

            <Green />


            <White />


            <Deal />

        </div>


    )

}
export default HomeIntro