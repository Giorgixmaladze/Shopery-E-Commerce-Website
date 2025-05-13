import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/context"

const NavigationFooter = () =>{
    
    const {page,changePage} = useContext(AuthContext)
    
    return(
        <div className="w-full flex justify-center items-center gap-[701px] h-[60px] bg-gray-800 max-sm:hidden">
            <div className="flex items-center justify-center gap-[32px]">
                <span className="flex gap-[5px] items-center">
                    <Link onClick={changePage} to="/" className={page ==="Home" ? "text-white":"text-gray-400"}>Home</Link>
                    <img src="public/navigation/arrow-down.png" alt="" />
                </span>
                <span  className="flex gap-[5px] items-center">
                    <Link onClick={changePage} to="/Shop" className={page ==="Shop" ? "text-white":"text-gray-400"}>Shop</Link>
                    <img src="public/navigation/arrow-down.png" alt="" />
                </span>
                <span className="flex gap-[5px] items-center">
                    <Link onClick={changePage} to="#" className={page ==="Pages" ? "text-white":"text-gray-400"}>Pages</Link>
                    <img src="public/navigation/arrow-down.png" alt="" />
                </span>
                <span className="flex gap-[5px] items-center">
                    <Link onClick={changePage} to="#" className={page ==="Blog" ? "text-white":"text-gray-400"}>Blog</Link>
                    <img src="public/navigation/arrow-down.png"  alt="" />
                </span>
                <span>
                    <Link onClick={changePage} to="#" className={page ==="About Us" ? "text-white":"text-gray-400"}>About Us</Link>
                </span>
                <span>
                    <Link onClick={changePage} to="#" className={page ==="Contact Us" ? "text-white":"text-gray-400"}>Contact Us</Link>
                </span>
            </div>
            <span className="flex items-center">
                <img src="public/navigation/phone.png"/>
                <p className="text-white">555-555-555</p>
            </span>

        </div>
    )
}

export default NavigationFooter