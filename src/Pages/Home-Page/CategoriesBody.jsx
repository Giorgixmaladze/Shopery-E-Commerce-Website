import { useContext } from "react"
import CategoryCard from "../../Components/CategoryCard/CategoryCard"
import { AuthContext } from "../../context/context"

const CategoriesBody = () => {
    const {categories} = useContext(AuthContext)
    
    return (
        <div className="grid grid-cols-6 grid-rows-2 gap-[20px]">
            {categories.map((item,index) =>{
                return(
                    <CategoryCard key={index} img={item.img} name={item.name} />
                )
            })}
        </div>

    )


}

export default CategoriesBody