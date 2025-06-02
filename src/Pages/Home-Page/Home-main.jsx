import Header from "../../Components/Header/Header"
import Benefits from "../../Components/Benefits/Benefits"
import Categories from "./Categories"
import HomeIntro from "./Home-introduction"
import { useContext } from "react"
import { SidebarContext } from "../../context/SidebarContext"
import Sidebar from "../../Components/Sidebar/Sidebar"
import PopularProducts from "../../Components/Popular/PopularProducts"

const Home = () => {
    const {sidebarOn} = useContext(SidebarContext)

    return (

            <div className="w-screen h-screen flex flex-col items-center">
                {sidebarOn?(
                    <Sidebar />
                ):(<p></p>)}
                <Header />
                <div className="w-[1319px] min-h-screen flex flex-col gap-[50px] max-sm:w-screen max-sm:items-center ">
                    <HomeIntro />
                    <Benefits />
                    <Categories />
                    <PopularProducts/>
                </div>
            </div>



    )
}
export default Home