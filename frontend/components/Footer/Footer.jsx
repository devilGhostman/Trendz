import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ApartmentIcon from "@mui/icons-material/Apartment";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-1 flex-col p-5">
        <h1 className="mb-[30px] text-lg  text-[#2f2e2e] font-semibold">
          <div className="ml-[2%] ">
            <img src="/logo.png" className="w-[90px] h-[20px]" />
          </div>
        </h1>
        <p className=" mt-1 mb-4 text-[gray]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="flex">
          <div className="w-10 h-10 text-[white] flex items-center justify-center mr-5 rounded-[50%] bg-[#3B5999]">
            <FacebookIcon />
          </div>
          <div className="w-10 h-10 text-[white] flex items-center justify-center mr-5 rounded-[50%] bg-[#E4405F] ">
            <InstagramIcon />
          </div>
          <div className="w-10 h-10 text-[white] flex items-center justify-center mr-5 rounded-[50%] bg-[#55ACEE]">
            <TwitterIcon />
          </div>
          <div className="w-10 h-10 text-[white] flex items-center justify-center mr-5 rounded-[50%] bg-[#E60023]">
            <PinterestIcon />
          </div>
        </div>
      </div>
      <div className="flex-1 p-5">
        <h3 className="mb-[30px] text-lg  text-[#555] font-semibold">
          Useful Links
        </h3>
        <ul className="flex flex-wrap m-0 p-0 list-none">
          <li className="w-6/12 mb-2.5 text-[gray]">Home</li>
          <li className="w-6/12 mb-2.5 text-[gray]">Cart</li>
          <li className="w-6/12 mb-2.5 text-[gray]">Man Fashion</li>
          <li className="w-6/12 mb-2.5 text-[gray]">Woman Fashion</li>
          <li className="w-6/12 mb-2.5 text-[gray]">Accessories</li>
          <li className="w-6/12 mb-2.5 text-[gray]">My Account</li>
          <li className="w-6/12 mb-2.5 text-[gray]">Order Tracking</li>
          <li className="w-6/12 mb-2.5 text-[gray]">Wishlist</li>
          <li className="w-6/12 mb-2.5 text-[gray]">Wishlist</li>
          <li className="w-6/12 mb-2.5 text-[gray]">Terms</li>
        </ul>
      </div>
      <div className="flex-1 p-5 flex flex-col sm:flex-row">
        <div>
          <h3 className="mb-[30px] text-lg font-semibold text-[#555]">
            Contact
          </h3>
          <div className="flex w-full">
            <div className="flex flex-col mb-5 w-full">
              <div className="flex  my-2 items-center">
                <ApartmentIcon style={{ marginRight: "10px", color: "gray" }} />
                <div className="text-[gray]">
                  622 Dixie Path, South Tobinchester 98336
                </div>
              </div>
              <div className="flex my-2 items-center">
                <LocalPhoneIcon
                  style={{ marginRight: "10px", color: "gray" }}
                />
                <div className="text-[gray]">
                  <span>+1 234 56 78</span>
                </div>
              </div>
              <div className="flex  my-2 items-center">
                <EmailIcon style={{ marginRight: "10px", color: "gray" }} />
                <div className="text-[gray]">contact@lama.dev</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-[30px] text-lg font-semibold text-[#555]">
            Payment Accepted
          </h3>
          <div className="flex justify-center items-center">
            <img
              src="https://i.ibb.co/Qfvn4z6/payment.png"
              alt=""
              className="w-[90%] h-[95%] mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
