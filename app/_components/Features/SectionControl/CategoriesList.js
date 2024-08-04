import { getAllCategories } from "@/app/services/categoryService";

const { default: CategoryCard } = require("./CategoryCard");

export default async function CategoriesList() {
  const { data: categories } = await getAllCategories();
  // console.log("categories:", categories);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))}
    </div>
  );
}
