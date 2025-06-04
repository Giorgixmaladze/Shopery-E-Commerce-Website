import Benefit from "./benefit"

const Benefits = () =>{
    return(
        <div className="w-full h-[290px] shadow-xl rounded-xl items-center flex justify-around max-sm:flex-col max-sm:min-h-[400px] max-sm:items-center max-sm:w-11/12">
           
            <Benefit img= "public/Home/delivery-truck.png" header="Free Shipping" par="Free shipping on all your order"/>
            <Benefit img="public/Home/headset.png" header="Customer Support 24.7" par="Instant access to Support" />
            <Benefit img="public/Home/shopping-bag.png" header="100% Secure Payment" par="We ensure your money is save"/>
            <Benefit img="public/Home/package.png" header="Money-Back Guarantee" par="30 Days Money-Back Guarantee"/>
        </div>
    )
}

export default Benefits