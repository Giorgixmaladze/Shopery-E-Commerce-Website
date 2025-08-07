import ShopNow from "../Shop-Now/Shop-Now-component"

const Posters = () => {
    return (
        <div className="flex min-[375px]: flex-col  min-[375px]:w-11/12 min-[375px]:items-center min-[375px]: gap-[30px] min-xl:flex-row min-xl:w-10/12" >
            <div className="min-[375px]:w-full min-[375px]: h-[536px] bg-[url('/Home/MeatPoster.png')] rounded-[10px] flex min-[375px]:items-center min-[375px]: bg-contain min-[375px]:pt-[30px] min-[375px]: flex-col bg-no-repeat min-[375px]:gap-[5px] min-md:bg-cover min-md:bg-center min-md:w-6/12">
                <p className="text-white">85% Fat Free</p>
                <h2 className="text-white min-[375px]:text-[35px] font-bold">Natural Meat</h2>
                <p className="text-white min-[375px]:text-[27px]">Started at <span className="text-[#FF8A00] font-bold">$79.99</span></p>
                <ShopNow />
            </div>


            <div className="min-[375px]:w-full min-[375px]: h-[536px] bg-[url('/Home/FruitsPoster.png')] rounded-[10px] flex min-[375px]:items-center min-[375px]: bg-contain min-[375px]:pt-[30px] min-[375px]: flex-col bg-no-repeat min-[375px]:gap-[5px] min-md:bg-cover min-md:bg-center min-md:w-6/12">
                <p>Summer Sale</p>
                <h2 className="min-[375px]:text-[35px] font-bold">100% Fresh Fruit</h2>
                <p className="min-[375px]:text-[27px]">Up to <span className="bg-black text-white">64% OFF</span></p>
                <ShopNow />
            </div>
        </div>

    )

}

export default Posters