import { Link } from "react-router-dom"

const ViewAll = () => {
    return (
        <Link to="#">
            <span className="flex items-center gap-[10px]">
                <p className="text-mwvane font-semibold">View all</p>
                <img src="public/Home/arrow-right.png"/>
            </span>
        </Link>

    )
}

export default ViewAll