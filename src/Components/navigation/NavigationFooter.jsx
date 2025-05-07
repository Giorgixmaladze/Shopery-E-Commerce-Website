const NavigationFooter = () =>{
    return(
        <div className="w-full flex justify-center items-center gap-[701px] h-[60px] bg-gray-800">
            <div className="flex items-center justify-center gap-[32px]">
                <span className="flex gap-[5px] items-center">
                    <a href="#" className="text-white">Home</a>
                    <img src="public/navigation/arrow-down.png" alt="" />
                </span>
                <span className="flex gap-[5px] items-center">
                    <a href="#" className="text-white">Shop</a>
                    <img src="public/navigation/arrow-down.png" alt="" />
                </span>
                <span className="flex gap-[5px] items-center">
                    <a href="#" className="text-white">Pages</a>
                    <img src="public/navigation/arrow-down.png" alt="" />
                </span>
                <span className="flex gap-[5px] items-center">
                    <a href="#" className="text-white">Blog</a>
                    <img src="public/navigation/arrow-down.png" alt="" />
                </span>
                <span className="flex gap-[5px] items-center">
                    <a href="#" className="text-white">Home</a>
                    <img src="public/navigation/arrow-down.png" alt="" />
                </span>
                <span>
                    <a href="#" className="text-white">About Us</a>
                </span>
                <span>
                    <a href="#" className="text-white">Contact Us</a>
                </span>
            </div>
            <span className="flex items-center">
                <img src="public/navigation/phone.png"/>
                <p className="text-white">555-555-555</p>
            </span>

        </div>
    )
}

export default NavigationFooter