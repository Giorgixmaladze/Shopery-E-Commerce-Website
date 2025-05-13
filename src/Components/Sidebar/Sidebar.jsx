import { useContext } from "react"
import SidebarProvider, { SidebarContext } from "../../context/SidebarContext"

const Sidebar = () => {

    const {setSidebarOn} = useContext(SidebarContext)
    return (

        <div className="w-screen h-screen bg-[#4b4b4ba2] fixed top-0 ">
            <div className="w-3/12 h-screen bg-black fixed top-[50px] ">
                <button onClick={()=> setSidebarOn(false) } className="bg-white">Close</button>
            </div>
        </div>

    )
}
export default Sidebar