import { useContext } from "react"
import SidebarProvider, { SidebarContext } from "../../context/SidebarContext"
import Sidebar from "../Sidebar/Sidebar"


const NavigationBody = () => {
    const {handleSidebar} = useContext(SidebarContext)
    return (
        <div className="w-full h-[93px] flex justify-around items-center min-[375px]:flex-col min-[375px]:h-[150px]  ">
            <span className="flex items-center gap-2">
                <img className="w-8 h-8" src="/navigation/Logo.png" alt="Logo" />
                <h1 className="text-3xl ">Ecobazar</h1>
            </span>
            <div className="hidden min-[375px]:flex min-[375px]:gap-[20px] min-[375px]:items-center">
                <span>
                    <button onClick={handleSidebar}  className="w-[50px] h-[50px] bg-mwvane bg-[url('/navigation/burger-menu.png')] bg-no-repeat bg-center rounded-[5px]">

                    </button>
                </span>
                <form className="flex items-center  min-[375px]:justify-center min-[375px]:w-[330px]">
                    <input type="text" className="bg-[url('/navigation/Search.png')] bg-[20px] bg-no-repeat border pl-[50px]  border-gray-300 rounded-tl-[10px] rounded-bl-[10px] outline-0 w-100 h-[45px] " name="search" placeholder="Search" />
                    <button className="w-[98px] h-[45px] bg-mwvane rounded-tr-[10px] rounded-br-[10px] text-white min-[375px]:text-[15px] min-[375px]:w-[150px]">Search</button>
                </form>

            </div>

            <span className="flex w-[191px] h-[34px] gap-[25px] items-center min-[375px]:hidden">
                <img src="/navigation/Heart.png" alt="Heart" />
                <div className="w-0 h-[34px] border border-collapse-collapse border-gray-400"></div>
                <img src="/navigation/wishlist.png" alt="" />
                <span className="w-[81px] h-[34px]">
                    <p className="text-[10px] w-[65px] text-gray-700">Shopping cart:</p>
                    <h3 className="text-sm">0</h3>
                </span>
            </span>
        </div>
    )


}
export default NavigationBody