import { Send } from "@mui/icons-material";

const Newsletter = () => {
  return (
    <div className="h-[60vh] bg-[#fcf5f5] flex items-center justify-center flex-col newletter my-10">
      <h1 className="text-[70px] mb-5"> Newsletter</h1>
      <div className="text-2xl font-semibold mb-5 text-center text-[#f1eeee]">
        Get timely updates from your favorite products.
      </div>
      <div className="w-[80%] md:w-6/12 h-10 bg-[white] flex justify-between border border-solid border-[lightgray] ">
        <input
          placeholder="Your email"
          className="flex-[8] pl-5 border-[none]"
        />
        <button className="flex-[1] bg-[#ff3e6c] text-[white] border-[none]">
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
