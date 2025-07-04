import ShopNow from "../Shop-Now/Shop-Now-component"
import { Link } from "react-router-dom"
const Green = () => {
    return (
        <div className="w-[872px] h-[600px] rounded-[10px] bg-linear-to-r row-start-1 col-start-1 from-[#003817] to-[#00c45f] min-[375px]:hidden min-md:w-6/12 min-md:h-[800px] min-lg:flex min-lg:h-[500px] min-lg:w-12/12 ">
            <div className="bg-[url('/Home/girl.png')] w-full h-full flex items-center bg-no-repeat bg-right pl-[50px] bg-size-[800px] min-md:bg-size-[600px]">
                <div className=" flex flex-col items-baseline gap-[28px] w-6/12">

                    <h1 className="text-white text-5xl font-medium min-md:text-4xl">Fresh & Healthy Organic Food</h1>
                    <div className="border-l-[2px] pl-[20px] border-l-[#84D187]">
                        <span className="flex gap-[10px] items-center">
                            <h2 className="text-white text-xl">Sale up to </h2>
                            <div className="w-[108px] h-[38px] flex rounded-[5px] justify-center items-center bg-[#FF8A00]">
                                <b className="text-white text-xl">30% OFF</b>
                            </div>
                        </span>

                        <p className="text-white font-light">Free shipping on all your order.</p>
                    </div>

                    <Link to="/shop">
                        <button className="w-[191px] h-[51px] bg-white text-mwvane flex items-center justify-center gap-[10px] rounded-4xl font-bold hover:bg-[#bac9bc] transition-colors duration-200 cursor-pointer">
                            <ShopNow />
                        </button>

                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Green