import CategoryCard from "./Home-utils/CategoryCard"

const CategoriesBody = () => {
    return (
        <div className="grid grid-cols-6 grid-rows-2 gap-[20px]">
            <CategoryCard img="public/Home/fruits.png" name="Fresh Fruits" />
            <CategoryCard img="public/Home/vegetables.png" name="Fresh Vegetables" />
            <CategoryCard img="public/Home/meat.png" name="Meat & Fish" />
            <CategoryCard img="public/Home/snacks.png" name="Snacks" />
            <CategoryCard img="public/Home/beverages.png" name="Beverages" />
            <CategoryCard img="public/Home/beauty.png" name="Beauty & Health" />
            <CategoryCard img="public/Home/bakery.png" name="Bread & Bakery" />
            <CategoryCard img="public/Home/baking.png" name="Baking & Needs" />
            <CategoryCard img="public/Home/cooking.png" name="Cooking" />
            <CategoryCard img="public/Home/diabetic.png" name="Diabetic Food" />
            <CategoryCard img="public/Home/dish.png" name="Dish Detergents" />
            <CategoryCard img="public/Home/oil.png" name="Oil" />
        </div>

    )


}

export default CategoriesBody