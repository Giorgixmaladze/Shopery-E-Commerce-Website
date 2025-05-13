import Header from "../../Components/Header/Header"
import Benefits from "../../Components/Benefits/Benefits"
import Categories from "./Categories"
import HomeIntro from "./Home-introduction"
import { fetchCategory } from "../../services/api"

const Home = () => {

    
    return (
        <div className="flex flex-col items-center">
            <Header />
            <div className="w-[1319px] min-h-screen flex flex-col gap-[50px]">
                <HomeIntro />
                <Benefits />
                <Categories />
            </div>



        </div>

    )
}
export default Home