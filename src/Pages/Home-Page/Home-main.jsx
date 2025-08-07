import Header from "../../Components/Header/Header"
import Benefits from "../../Components/Benefits/Benefits"
import Categories from "./Categories"
import HomeIntro from "./Home-introduction"
import { useContext } from "react"
import { SidebarContext } from "../../context/SidebarContext"
import Sidebar from "../../Components/Sidebar/Sidebar"
import PopularProducts from "../../Components/Popular/PopularProducts"
import HotDeals from "../../Components/Deals/HotDeals"

import Posters from "../../Components/Offers/Posters"




const Home = () => {
    const {sidebarOn} = useContext(SidebarContext)

    return (

            <div className="w-screen h-screen flex flex-col items-center">
                {sidebarOn?(
                    <Sidebar />
                ):(<p></p>)}
                <Header />
                <div className="w-[1319px] min-h-screen flex flex-col gap-[60px] min-[375px]:w-screen min-[375px]:items-center min-md:items-cente min-lg:w-11/12">
                    <HomeIntro />
                    <Benefits />
                    <Categories />
                    <PopularProducts/>
                    <HotDeals />

                    <Posters />

                </div>
            </div>



    )
}
export default Home