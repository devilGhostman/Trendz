import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import Link from "next/link";

const Product = ({ item }) => {
  return (
    <div className="flex-[1] min-w-[280px] h-[350px] flex items-center justify-center bg-[#f5fbfd] relative m-[5px]">
      <div className="w-[250px] h-[250px] bg-[white] absolute rounded-[50%] flex justify-center items-center">
        <img src={item.img1} className="h-[300px] z-[2] " />

        <div className="opacity-0 hover:opacity-100 w-full h-full absolute bg-[rgba(0,0,0,0.2)] z-[3] flex items-center justify-center transition-all duration-[0.5s] ease-[ease] cursor-pointer left-0 top-0">
          <div className="w-10 h-10 bg-[white] flex items-center justify-center transition-all duration-[0.5s] ease-[ease] m-2.5 rounded-[50%] hover:bg-[#e9f5f5] hover:scale-110">
            <ShoppingCartOutlined />
          </div>
          <Link
            href={{
              pathname: "/product/[id]",
              query: { id: item._id },
            }}
          >
            <div className="w-10 h-10 bg-[white] flex items-center justify-center transition-all duration-[0.5s] ease-[ease] m-2.5 rounded-[50%] hover:bg-[#e9f5f5] hover:scale-110">
              <SearchOutlined />
            </div>
          </Link>
          <div className="w-10 h-10 bg-[white] flex items-center justify-center transition-all duration-[0.5s] ease-[ease] m-2.5 rounded-[50%] hover:bg-[#e9f5f5] hover:scale-110">
            <FavoriteBorderOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
