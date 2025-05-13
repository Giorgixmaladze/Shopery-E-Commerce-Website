import CategoriesHeader from "../../Components/Popular/Categories-header"
import ViewAll from "../../Components/Popular/ViewAll"
import CategoriesBody from "./CategoriesBody"
const Categories = () => {

    return (
        <div className="w-full flex flex-col gap-[50px]">
            <CategoriesHeader text="Popular Categories" />
            <CategoriesBody />
        </div>

    )
}
export default Categories