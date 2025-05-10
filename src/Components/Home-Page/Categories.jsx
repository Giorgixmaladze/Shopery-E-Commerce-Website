import CategoriesHeader from "./Categories-header"
import ViewAll from "./Home-utils/ViewAll"
import CategoriesBody from "./CategoriesBody"
const Categories = () => {

    return (
        <div className="w-full flex flex-col gap-[50px]">
            <CategoriesHeader />
            <CategoriesBody />
        </div>

    )
}
export default Categories