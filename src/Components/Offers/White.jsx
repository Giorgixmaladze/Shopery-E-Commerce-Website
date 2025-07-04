import ShopNow from "../Shop-Now/Shop-Now-component"


const White = () => {
    return (
        <div className="bg-[url('/Home/summer-sale.png')] bg-no-repeat bg-cover col-start-3 row-start-1 min-[375px]:w-11/12 h-[300px] min-md:hidden min-lg:flex min-lg:col-start-3 ">
            <div className="flex flex-col items-baseline gap-[30px] p-[20px]">
                <div>
                    <h3 className="text-[15px] font-semibold">Summer Sale</h3>
                    <h2 className="text-[38px] font-bold">75% OFF</h2>
                    <p className="text-gray-600 font-light">Only Fruit & Vegetables</p>

                </div>

                <ShopNow />
            </div>
        </div>
    )
}

export default White