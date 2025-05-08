import { Link } from "react-router-dom"

const HomeIntro = () => {

    return (
        <div className="w-[1319px] h-[600px] grid grid-cols-3">
            <div className="w-[872px] h-[600px] rounded-[10px] bg-linear-to-r col-span-3 from-[#003817]  to-[#00c45f]">
                <div className="bg-[url('public/Home/girl.png')] w-full h-full flex items-center bg-no-repeat bg-right pl-[50px] bg-size-[800px]">
                    <div className=" flex flex-col items-baseline gap-[28px] w-6/12">

                        <h1 className="text-white text-5xl font-medium">Fresh & Healthy Organic Food</h1>
                        <div>
                            <span className="border-l-[#84D187] flex gap-[10px] items-center">
                                <h2 className="text-white text-xl">Sale up to </h2>
                                <div className="w-[108px] h-[38px] flex rounded-[5px] justify-center items-center bg-[#FF8A00]">
                                    <b className="text-white text-xl">30% OFF</b>
                                </div>
                            </span>

                            <p className="text-white font-light">Free shipping on all your order.</p>
                        </div>

                        <Link to="/Shop">
                            <button className="w-[191px] h-[51px] bg-white text-mwvane flex items-center justify-center gap-[10px] rounded-4xl font-bold">
                                Shop Now
                                <img src="public/Home/arrow-right.png" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default HomeIntro