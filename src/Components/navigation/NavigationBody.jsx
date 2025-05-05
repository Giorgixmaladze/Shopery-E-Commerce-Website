const NavigationBody = () =>{

    return(
        <div className="w-full h-93 flex justify-around items-center">
            <span className="flex items-center gap-2">
                <img className="w-8 h-8" src="public/navigation/Logo.png" alt="Logo" />
                <h1 className="text-3xl ">Ecobazar</h1>
            </span>
            <form className="flex items-center">
                <input type="text" className="bg-[url('public/navigation/Search.png')] bg-[20px] bg-no-repeat border pl-[50px]  border-gray-300 rounded-[7px] w-100 h-[45px]" name="search" placeholder="Search"/>
                <button className="w-[98px] h-[45px] bg-searchGreen">Search</button>
            </form>
            <span>
                <img src="public/navigation/Heart.png" alt="Heart" />
                <div className="w-0 h-5 border border-collapse-collapse border-gray-400"></div>
                <img src="public/navigation/wishlist.png" alt="" />
                <span>
                    <p>Shopping cart:</p>
                    <h3>0</h3>
                </span>
            </span>
        </div>
    )


}
export default NavigationBody