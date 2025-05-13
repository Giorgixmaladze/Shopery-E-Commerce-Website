const CategoryCard = ({img,name}) =>{

    return (
        <div className="border  border-gray-200 rounded-[10px] flex justify-around flex-col items-center h-[212px] hover:border-mwvane hover:shadow-lg shadow-mwvane transition duration-200">
            <img src={img}/>
            <h3>{name}</h3>
        </div>
    )

}

export default CategoryCard