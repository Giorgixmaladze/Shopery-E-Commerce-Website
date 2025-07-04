import CategoriesHeader from "../../Components/Popular/Categories-header"
import ViewAll from "../../Components/Popular/ViewAll"
import CategoriesBody from "./CategoriesBody"
const Categories = () => {

    return (
        <div className="w-11/12 flex flex-col gap-[50px] min-md:w-8/12">
            <CategoriesHeader text="Popular Categories" />
            <CategoriesBody />
        </div>

    )
}
export default Categories