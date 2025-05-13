import { Link } from "react-router-dom"

const ShopNow = () => {
    return (
        
        <span  className="font-bold text-mwvane flex items-center gap-[10px]">
            <Link className="w-full h-full" to="/Shop">Shop Now</Link>
            <img src="public/Home/arrow-right.png" />
        </span>
    )
}

export default ShopNow