const NavigationBody = () =>{

    return(
        <div className="w-full h-[93px] flex justify-around items-center">
            <span className="flex items-center gap-2">
                <img className="w-8 h-8" src="public/navigation/Logo.png" alt="Logo" />
                <h1 className="text-3xl ">Ecobazar</h1>
            </span>
            <form className="flex items-center">
                <input type="text" className="bg-[url('public/navigation/Search.png')] bg-[20px] bg-no-repeat border pl-[50px]  border-gray-300 rounded-tl-[10px] rounded-bl-[10px] outline-0 w-100 h-[45px]" name="search" placeholder="Search"/>
                <button className="w-[98px] h-[45px] bg-mwvane rounded-tr-[10px] rounded-br-[10px]">Search</button>
            </form>
            <span className="flex w-[191px] h-[34px] gap-[25px] items-center ">
                <img src="public/navigation/Heart.png" alt="Heart" />
                <div className="w-0 h-[34px] border border-collapse-collapse border-gray-400"></div>
                <img src="public/navigation/wishlist.png" alt="" />
                <span className="w-[81px] h-[34px]">
                    <p className="text-[10px] w-[65px] text-gray-700">Shopping cart:</p>
                    <h3 className="text-sm">0</h3>
                </span>
            </span>
        </div>
    )


}
export default NavigationBody