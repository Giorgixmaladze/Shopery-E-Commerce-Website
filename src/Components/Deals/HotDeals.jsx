import { useContext } from "react"
import CategoriesHeader from "../Popular/Categories-header"
import { AuthContext } from "../../context/context"


const HotDeals = () => {
    const { openDetails,randomDeals } = useContext(AuthContext)

    return (
        <div className="w-full bg-white">
            <CategoriesHeader text="Hot Deals" />
            <div className="grid min-[375px]: grid-cols-2">

                {
                    randomDeals.map((item, index) => {
                        return (
                            <div onClick={() => openDetails(item)} className="border border-gray-400 flex flex-col items-center gap-5">
                                <img className="w-10/12" src={item.image} alt="" />
                                <h2>{item.name}</h2>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default HotDeals