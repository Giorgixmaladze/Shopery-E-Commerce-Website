import { useContext } from "react"
import SidebarProvider, { SidebarContext } from "../../context/SidebarContext"

const Sidebar = () => {

    const {setSidebarOn} = useContext(SidebarContext)
    return (

        <div className="w-screen h-screen bg-[#4b4b4ba2] fixed top-0 ">
            <div className="w-[200px] h-screen bg-black fixed top-[230px]">
                <button onClick={()=> setSidebarOn(false) } className="bg-white">Close</button>
            </div>
        </div>

    )
}
export default Sidebar