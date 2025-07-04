import Benefit from "./benefit"

const Benefits = () =>{
    return(
        <div className="w-full h-[290px] shadow-xl rounded-xl items-center flex justify-around min-[375px]:flex-col min-[375px]:min-h-[400px] min-[375px]:items-center min-[375px]:w-11/12 min-md:flex-col min-md:w-8/12 ">
           
            <Benefit img= "/Home/delivery-truck.png" header="Free Shipping" par="Free shipping on all your order"/>
            <Benefit img="/Home/headset.png" header="Customer Support 24.7" par="Instant access to Support" />
            <Benefit img="/Home/shopping-bag.png" header="100% Secure Payment" par="We ensure your money is save"/>
            <Benefit img="/Home/package.png" header="Money-Back Guarantee" par="30 Days Money-Back Guarantee"/>
        </div>
    )
}

export default Benefits