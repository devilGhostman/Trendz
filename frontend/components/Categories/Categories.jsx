import { categories } from "../../data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <>
      <div className="mb-5 md:text-[22px] text-lg font-medium uppercase md:px-5 px-2  after:block after:w-[70px] after:h-[3px] after:bg-[#2dafe2] after:mt-[5px]">
        Categories to choose
      </div>
      <div className="flex flex-col md:flex-row justify-between md:p-5 p-0">
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Categories;
