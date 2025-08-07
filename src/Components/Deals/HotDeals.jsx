import { useContext } from "react"
import CategoriesHeader from "../Popular/Categories-header"
import { AuthContext } from "../../context/context"
import { memo } from "react"


const HotDeals = () => {
    const { openDetails, randomDeals } = useContext(AuthContext)

    return (
        <div className=" bg-white min-[375px]: w-11/12 flex flex-col gap-5 min-md:w-8/12 min-xl:w-10/12" >
            <CategoriesHeader text="Hot Deals" />
            <div className="grid min-[375px]: grid-cols-2 min-md:grid-cols-3 min-xl:grid-cols-4">


                {
                    randomDeals.map((item, index) => {
                        return (
                            <div onClick={() => openDetails(item)} className="border border-gray-200 flex flex-col items-center gap-5 justify-center">
                                <img className="w-7/12" src={item.image} alt="" />
                                <div className="flex min-[375px]: items-center min-[375px]: gap-5">
                                    <span>
                                        <h2>{item.name}</h2>
                                        <p className="line-through text-gray-400">{item.oldPrice}$</p>
                                        <p className="text-mwvane">{item.price}$</p>
                                        <p className="flex items-center">Rating: <span class="material-symbols-outlined text-amber-500">
                                            star_half
                                        </span> {item.rating}</p>
                                    </span>
                                    <span>
                                        <button className="bg-[url('/Home/Bag.png')] w-[40px] h-[40px] bg-no-repeat bg-center rounded-4xl bg-gray-300 hover:bg-[url('/Home/bag-white.png')] hover:bg-mwvane transition duration-200"></button>
                                    </span>

                                </div>

                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default memo(HotDeals)