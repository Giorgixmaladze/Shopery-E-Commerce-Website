import ViewAll from "./Home-utils/ViewAll"

const CategoriesHeader = () =>{
    return(
        <div className="w-full flex justify-between items-center">
            <h2 className="font-bold text-[38px]">Popular Categories</h2>
            <ViewAll />
        </div>
    )
}
 
export default CategoriesHeader