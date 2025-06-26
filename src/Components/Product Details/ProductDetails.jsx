import { useContext } from "react"
import { AuthContext } from "../../context/context"

const ProductDetails = () => {
    const {closeDetails,selectedProduct} = useContext(AuthContext)
    return (
        <div className="w-screen bg-black fixed top-0 left-0 opacity-90 h-screen flex items-center justify-center">
            <div className="bg-gray-200 fixed min-[375px]:w-11/12 min-[375px]:h-7/12">
                <div className="w-full">
                    <span class="material-symbols-outlined absolute min-[375px]:left-[10px] min-[375px]:top-[10px]" onClick={closeDetails}>
                    close
                </span>

                <div>
                    <img src={selectedProduct.image} alt="" />
                </div>
                </div>
                
            </div>
        </div>

    )
}

export default ProductDetails