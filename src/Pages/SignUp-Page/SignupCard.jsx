import { Link } from "react-router-dom"

const SignupCard = () => {
    return (
        <div className="w-full flex min-[375px]:justify-center">
            <div className="bg-white min-[375px]: w-11/12 shadow-2xl flex justify-center min-[375px]: h-[500px] rounded-[10px]">
                <div className="w-11/12 flex flex-col justify-center items-center gap-[30px]">
                    <h1 className="min-[375px]: text-[28px] font-bold">Create Account</h1>
                    <form action="" className="flex flex-col w-11/12 min-[375px]: gap-[20px]">
                        <input className="border border-gray-200 min-[375px]:h-[49px] pl-[10px] rounded-[5px]" type="email" name="email" placeholder="Email"/>
                        <input className="border border-gray-200 min-[375px]:h-[49px] pl-[10px] rounded-[5px]" type="password" name="password" placeholder="Password" />
                        <input className="border border-gray-200 min-[375px]:h-[49px] pl-[10px] rounded-[5px]" type="password" name="confirm" placeholder="Confirm Password"/>
                        <span className="flex items-center gap-[10px]">
                            <input type="checkbox" name="terms" id="terms" />
                            <label htmlFor="" className="text-gray-600">Accept all terms & conditions</label>
                        </span>
                        <button className="min-[375px]: w-11/12 min-[375px]:h-[45px] rounded-2xl bg-mwvane text-white">Sign Up</button>
                        <p className="text-gray-600">Already have an account? <Link className="font-bold text-black" to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SignupCard