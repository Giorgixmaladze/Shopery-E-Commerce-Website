import { useContext } from "react"
import { AuthContext } from "../../context/context"

const ProductDetails = () => {
    const { closeDetails, selectedProduct } = useContext(AuthContext)
    return (
        <div className="w-screen bg-black fixed top-0 left-0 opacity-90 h-screen flex items-center justify-center">
            <div className="bg-white fixed min-[375px]:w-11/12 min-[375px]:h-7/12 rounded-[10px] flex min-[375px]:justify-center min-xl:w-6/12 min-lg:w-6/12 min-lg:h-9/12">
                <div className="w-full">
                    <span class="material-symbols-outlined absolute min-[375px]:left-[10px] min-[375px]:top-[10px]" onClick={closeDetails}>
                        close
                    </span>

                    <div className="flex min-[375px]:flex-col min-[375px]:items-center min-[375px]: gap-[15px] min-[375px]:justify-center min-md:justify-center h-full">
                        <img className="w-3/12" src={selectedProduct.image} alt="" />
                        <h2 className="text-3xl font-semibold">{selectedProduct.name}</h2>
                        <p className="text-2xl">{selectedProduct.description}</p>
                        <p className="text-xl text-mwvane">Price : {selectedProduct.price}$</p>
                        <p className="text-xl flex items-center ">Rating : <span class="material-symbols-outlined text-amber-500">
                            star_half
                        </span> {selectedProduct.rating}/5.0</p>
                        <button className="min-[375px]:w-5/12 bg-mwvane hover:bg-white hover:border-2 hover:border-mwvane duration-200 h-10 text-white hover:text-black cursor-pointer rounded-[10px]">Add To Cart</button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default ProductDetails