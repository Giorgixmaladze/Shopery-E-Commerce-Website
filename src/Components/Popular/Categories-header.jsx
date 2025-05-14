import ViewAll from "./ViewAll"

const CategoriesHeader = ({text}) =>{
    return(
        <div className="w-full flex justify-between items-center max-sm:flex-col">
            <h2 className="font-bold text-[38px]">{text}</h2>
            <ViewAll />
        </div>
    )
}
 
export default CategoriesHeader