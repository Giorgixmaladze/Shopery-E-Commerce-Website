

import NavigationBody from "./NavigationBody";
import NavigationFooter from "./NavigationFooter";


const Navigation = () => {

    return (
        <header className="w-full h-[250px] flex flex-col gap-1">
            <div className="w-full border border-gray-300 h-0"></div>
            <NavigationBody />
            <NavigationFooter/>
        </header>
    )


}

export default Navigation