const NavigationHeader = () => {
    return (
        <div className="w-full h-[42px] flex items-center justify-around ">
            <span className="flex items-center gap-2">
                <img src="public/Map-Pin.png" alt="" />
                <p className="font-light text-gray-600">Store Location: Lincoln- 344, illionis, Chicago, USA</p>
            </span>
            <div className="flex items-center gap-3">
                <select className="font-light bg-white border border-white text-gray-600 text h-15 w-20 outline-0 px-4 py-2" name="lang" id="" defaultValue='en'>
                    <option value="en">Eng</option>
                    <option value="geo">Geo</option>
                </select>
                <select className="font-light bg-white border border-white text-gray-600 rounded-lg w-22 outline-0 px-4 py-2" name="valute" id="" defaultValue="USD">
                    <option value="USD">USD</option>
                    <option value="GEL">GEL</option>
                </select>
                <div className="w-0 h-5 border border-collapse-collapse border-gray-400"></div>
                <span>
                    <a href="#" className="font-light text-gray-600">Sign In</a> <span className="text-gray-600 font-light">/</span> <a href="#" className="font-light text-gray-600">Sign Up</a>
                </span>
            </div>
        </div>
    )
}

export default NavigationHeader