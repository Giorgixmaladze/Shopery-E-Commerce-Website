import Navigation from "../navigation/Navigation"
import Benefits from "./Benefits"
import Categories from "./Categories"
import HomeIntro from "./Home-introduction"

const Home = () => {
    return (
        <div className="flex flex-col items-center">
            <Navigation />
            <div className="w-[1319px] min-h-screen flex flex-col gap-[50px]">
                <HomeIntro />
                <Benefits />
                <Categories />
            </div>



        </div>

    )
}
export default Home