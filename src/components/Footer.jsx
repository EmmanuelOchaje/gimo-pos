import googlePlay from "../assets/images/gg.png";
import appStore from "../assets/images/apple-app-store-logo.jpg";
import { Link } from "react-router-dom";
// import windows from "../../assets/images/windows.png";
// import apple from "../../assets/images/apple.png";
import apple from "../assets/images/apple.png";
import windows from "../assets/images/windows.png";

const Footer = () => {
  return (
    <div className="bg-[#f4f1fa] py-10">
      <div>
        <h2 className="text-center">
          <span className="bg font-bold text-2xl md:text-[35px]">
            Ready To Download?
          </span>
        </h2>
        <p className="mt-5 text-[15px] text-center">
          To get the mobile application, click on the buttons below
        </p>

        <div className="flex justify-center items-center m-auto">
          <div className="flex">
            <img
              src={googlePlay}
              className="cursor-pointer m-auto my-5 smmy-0 h-[50px] w-[160px] md:h-[69px] md:m-8 md:w-[230px]"
              alt=""
            />
            <img
              src={appStore}
              className="cursor-pointer m-auto h-[50px] w-[160px] md:h-[69px] md:m-8 md:w-[230px]"
              alt=""
            />
          </div>
        </div>

        <ul className="flex justify-center mt-5">
          <li className="mr-5 w-fit m- text-[12px] font-bold cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-5 w-fit m- text-[12px] font-bold cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="mr-5 w-fit m- text-[12px] font-bold cursor-pointer">
            <Link to="/guide">Guide</Link>
          </li>
          <li className="mr-5 w-fit m- text-[12px] font-bold cursor-pointer">
            <Link to="/privacy">Privacy</Link>
          </li>
        </ul>
        <p className="text-center mt-5">
          © 2024 Copyrights by{" "}
          <span className="cursor-pointer font-semibold text-[#6665ff]">
            GimoPOS.com.
          </span>{" "}
          All Rights Reserved. Owned By Gimo Internet Tech
        </p>

        <p className="text-center mt-5">
          Contact Us {""}
          <span className="cursor-pointer font-semibold text-[#6665ff]">
            info@GimoPOS.com
          </span>
          {" ,"}
          <span className="cursor-pointer font-semibold text-[#6665ff]">
            +234907 071 7710
          </span>
        </p>

        <p className="text-center mt-5">
          Download Our Desktop App
          <span className="cursor-pointer font-semibold text-[#6665ff]"></span>
        </p>
        <div className="flex justify-center m-auto w-fit sm:py-10">
          <p className="cursor-pointer w-fit m-auto flex justify-center sm:ml-0 mr-5 md:mr-5">
            <p className="bg-gray-300 rounded-full w-fit h-[50px] text-center">
              <img src={apple} className="w-[50px] h-[50px]" alt="apple" />
              <span></span>
            </p>
            <p className="w-fit text-[13px] md:text-[18px] font-medium text-[#505050] ml-2">
              Download For <br /> macOS
            </p>
          </p>

          <p className="cursor-pointer w-fit m-auto justify-center sm:ml-0 flex">
            <p className="bg-gray-300 rounded-full w-[45px] h-[45px] text-center">
              <img
                src={windows}
                className="w-[40p] m-auto h-[40px]"
                alt="windows"
              />
            </p>
            <p className="w-fit text-[13px] md:text-[18px] font-medium text-[#505050] ml-2">
              Download For <br /> Windows
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
