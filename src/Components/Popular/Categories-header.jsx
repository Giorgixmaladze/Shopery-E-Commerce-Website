import ViewAll from "./ViewAll"

const CategoriesHeader = ({text}) =>{
    return(
        <div className="w-full flex justify-between items-center min-[375px]:flex-col min-md:gap-5 min-lg:flex-row">
            <h2 className="font-bold text-[38px] min-md:text-3xl">{text}</h2>
            <ViewAll />
        </div>
    )
}
 
export default CategoriesHeader