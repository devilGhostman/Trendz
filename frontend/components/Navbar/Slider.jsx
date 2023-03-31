import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import { sliderItems } from "../../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className=" w-full md:h-[60vh] lg:h-[70vh] lg:mt-7 mt-[50px]   md:flex relative overflow-hidden">
      <div className="w-fit flex absolute gap-2.5 m-auto bottom-[10px] lg:inset-x-0 right-3 z-10">
        <div
          className="w-[60px] h-[50px] border flex items-center justify-center cursor-pointer border-solid border-[#999] text-[#aaa]"
          onClick={() => handleClick("left")}
        >
          <ArrowLeftOutlined />
        </div>
        <div
          className="w-[60px] h-[50px] border flex items-center justify-center cursor-pointer border-solid border-[#999] text-[#aaa]"
          onClick={() => handleClick("right")}
        >
          <ArrowRightOutlined />
        </div>
      </div>

      <div
        className="h-full flex transition-all duration-[1.5s] ease-[ease]"
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
      >
        {sliderItems.map((item) => (
          <>
            <div
              className=" w-screen  md:h-[100%] hidden  md:flex items-center"
              style={{ backgroundColor: `#${item.bg}` }}
              key={item.id}
            >
              <div className="h-full  md:flex md:flex-[2] w-full">
                <img
                  src={item.img}
                  className="h-[100%] w-[100%] object-cover"
                />
              </div>
              <div
                className="w-screen h-full md:flex-[1] md:p-[50px]"
                // style={{
                //   backgroundImage: `url(${item.img})`,
                //   width: "100%",
                //   height: "100%",
                //   objectFit: "cover",
                // }}
              >
                <h1 className="text-[40px] font-semibold m-8 md:text-[70px]">{item.title}</h1>
                <p className="text-xl font-medium tracking-[3px]  m-8 ">
                  {item.desc}
                </p>
                <button className="text-xl bg-transparent cursor-pointer p-2.5  mx-8 mb-8 border-2 w-[150px] h-[50px]">
                  SHOW NOW
                </button>
              </div>
            </div>
            <div
              className="w-full h-full flex md:hidden items-center"
              key={item.id}
            >
              <div
                className="h-full w-full flex-2 flex flex-col justify-start"
                style={{
                  backgroundImage: `url(${item.img})`,
                  width: "90vh",
                  height: "60vh",
                  objectFit: "cover",
                }}
              >
                <h1 className="text-[white] text-[40px] m-8 md:text-[70px]">
                  {item.title}
                </h1>
                <p className="text-[#c3c2c2] text-xl font-semibold tracking-[3px] mt-8 m-8 ">
                  {item.desc}
                </p>
                <button className="text-xl text-[#aaa] bg-transparent cursor-pointer p-2.5  mx-8 mb-8 border-2 w-[150px] h-[50px]">
                  SHOW NOW
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Slider;
