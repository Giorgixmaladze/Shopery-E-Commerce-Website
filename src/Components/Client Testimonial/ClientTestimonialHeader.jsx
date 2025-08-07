const ClientTestimonialHeader = () => {
    return (
        <div className="min-[375px]: w-11/12 flex  min-[375px]: flex-col min-[375px]:items-center min-[375px]:pt-[50px] min-[375px]:gap-[30px]">
            <h2 className="font-semibold min-[375px]: text-[28px]">Client Testimonial</h2>
            <span className="flex gap-[20px]">
                <button className="min-[375px]:w-[45px] min-[375px]:h-[45px] bg-white rounded-[50%] flex items-center justify-center">
                    <img src="/Home/leftArrow.png" alt="" />
                </button>
                <button  className="min-[375px]:w-[45px] min-[375px]:h-[45px] bg-white rounded-[50%] flex items-center justify-center">
                    <img  src="/Home/arrowRight.png" alt="" />
                </button>
            </span>
        </div>
    )

}

export default ClientTestimonialHeader