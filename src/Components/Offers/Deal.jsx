import ShopNow from "../Shop-Now/Shop-Now-component"


const Deal = () => {
    return (
        <div className="bg-[url('/Home/plants.png')] min-lg:col-start-3 bg-no-repeat bg-cover rounded-2xl overflow-hidden min-[375px]:w-11/12 h-[300px] min-md:h-[500px] min-md:w-10/12 min-lg:row-start-2 min-lg:h-[288px] min-lg:w-[325px] row-start-2 col-start-3 col-end-4">
            <div className="bg-[#001b01a2] w-full h-full flex items-center justify-center">
                <div className="flex flex-col items-center justify-center text-center w-8/12 gap-[15px]">
                    <h3 className="text-[14px] text-white">BEST DEAL</h3>
                    <h2 className="text-white text-3xl font-semibold">Special Products Deal of the Month</h2>
                    <ShopNow />
                </div>
            </div>
        </div>
    )
}

export default Deal