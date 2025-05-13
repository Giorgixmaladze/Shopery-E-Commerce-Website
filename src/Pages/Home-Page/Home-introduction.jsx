import { Link } from "react-router-dom"
import ShopNow from "../../Components/Shop-Now/Shop-Now-component"

const HomeIntro = () => {

    return (
      
            <div className=" w-full h-[600px] grid grid-rows-2 gap-[20px]  grid-cols-3">
                <div className="w-[872px] h-[600px] rounded-[10px] bg-linear-to-r row-start-1 col-start-1 from-[#003817]  to-[#00c45f]">
                    <div className="bg-[url('public/Home/girl.png')] w-full h-full flex items-center bg-no-repeat bg-right pl-[50px] bg-size-[800px]">
                        <div className=" flex flex-col items-baseline gap-[28px] w-6/12">

                            <h1 className="text-white text-5xl font-medium">Fresh & Healthy Organic Food</h1>
                            <div className="border-l-[2px] pl-[20px] border-l-[#84D187]">
                                <span className="flex gap-[10px] items-center">
                                    <h2 className="text-white text-xl">Sale up to </h2>
                                    <div className="w-[108px] h-[38px] flex rounded-[5px] justify-center items-center bg-[#FF8A00]">
                                        <b className="text-white text-xl">30% OFF</b>
                                    </div>
                                </span>

                                <p className="text-white font-light">Free shipping on all your order.</p>
                            </div>


                            <button className="w-[191px] h-[51px] bg-white text-mwvane flex items-center justify-center gap-[10px] rounded-4xl font-bold">
                                <ShopNow />
                            </button>

                        </div>
                    </div>
                </div>
                <div className="bg-[url('public/Home/summer-sale.png')] bg-no-repeat bg-cover col-start-3 row-start-1">
                    <div className="flex flex-col items-baseline gap-[30px] p-[20px]">
                        <div>
                            <h3 className="text-[15px] font-semibold">Summer Sale</h3>
                            <h2 className="text-[38px] font-bold">75% OFF</h2>
                            <p className="text-gray-600 font-light">Only Fruit & Vegetables</p>

                        </div>

                        <ShopNow />
                    </div>
                </div>
                <div className="bg-[url('public/Home/plants.png')] col-start-3 bg-no-repeat bg-cover rounded-2xl overflow-hidden">
                    <div className="bg-[#001b01a2] w-full h-full flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center text-center w-8/12 gap-[15px]">
                            <h3 className="text-[14px] text-white">BEST DEAL</h3>
                            <h2 className="text-white text-3xl font-semibold">Special Products Deal of the Month</h2>
                            <ShopNow />
                        </div>
                    </div>
                </div>
            </div>
        

    )

}
export default HomeIntro