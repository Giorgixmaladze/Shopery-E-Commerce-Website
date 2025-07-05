const Benefit = ({img,header,par}) => {
    return (
        <span className="flex items-center gap-[20px] h-[128px] min-md:w-9/12 min-md:justify-between min-md:gap-20 min-xl:gap-[10px]">
            <img src={img} alt="" />
            <span className="flex flex-col gap-[5px] min-md:w-11/12 ">
                <h3 className="font-semibold text-[19px]">{header}</h3>
                <p className="text-gray-400">{par}</p>
            </span>
        </span>
    )
}

export default Benefit