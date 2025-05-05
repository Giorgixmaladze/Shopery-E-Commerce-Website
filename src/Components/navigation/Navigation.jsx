import { Select, Option } from "@material-tailwind/react";
import NavigationHeader from "./NavigationHeader";
import NavigationBody from "./NavigationBody";


const Navigation = () => {

    return (
        <header className="w-full h-50 flex flex-col gap-1">
            <NavigationHeader />
            <div className="w-full border border-gray-300 h-0"></div>
            <NavigationBody />

        </header>
    )


}

export default Navigation