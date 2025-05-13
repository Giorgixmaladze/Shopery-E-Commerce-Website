import ShopNow from "../Shop-Now/Shop-Now-component"


const Deal = () => {
    return (
        <div className="bg-[url('public/Home/plants.png')] col-start-3 bg-no-repeat bg-cover rounded-2xl overflow-hidden">
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