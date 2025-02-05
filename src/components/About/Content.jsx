import ceo from "../../assets/images/CEO.jpg";
import indian from "../../assets/images/indian.jpg";
import mentor from "../../assets/images/Mentor.jpg";
import emmy from "../../assets/images/emmanuel.jpg";

const ContentAbout = (props) => {
  return (
    <div className="py-8 px-4 lg:px-[6rem]">
      <div>
        <p className="bg-[#6665ff1a] text-[12px] mb-5 rounded-lg text-[#6665ff] font-medium p-1 w-fit h-fit md:text-[14px]">
          AboutUs GimoPOS - POS App
        </p>

        <h2 className="font-bold text-[30px] md:ml-5 leading-[50px]">
          <span className="bg font-bold text-2xl md:text-4xl">
            What is GimoPOS POS?
          </span>
        </h2>

        <p className="lg:px-5 md:leading-8 leading-6">
          <span className="font-medium text-[#6665ff]">GimoPOS.com</span> is a
          cutting-edge Point of Sale (POS) SaaS platform designed for small to
          medium-sized businesses looking to streamline their sales, inventory
          management, and reporting processes. Our system is built to be
          user-friendly, efficient, and accessible, making it the ideal solution
          for businesses in various industries such as retail, hospitality, and
          service sectors. GimoPOS.com is subscription-based, offering various
          pricing plans tailored to meet different business needs, and we have
          successfully launched it in Nigeria. Now, we are looking to expand our
          market internationally by partnering with local experts who will help
          us.
        </p>

        <p className="lg:px-5 md:leading-8 leading-6 py-10">
          This software comes with all essential tools for managing quotations,
          invoices, recurring invoices, stock management and all other essential
          features related with billing and accounting. The most interesting and
          unique features of this system is the Drag and Drop Invoice Template
          builder where you can create your own invoice template without any
          coding knowledge. ￼
        </p>

        <h2 className="font-bold text-[30px] md:ml-5 leading-[50px]">
          <span className="bg font-bold text-2xl md:text-4xl">
            Who We Are ?
          </span>
        </h2>
        <p className="lg:px-5 md:leading-8 leading-6">
          We, at GimoPOS.com, offer SaaS services. Our ERP and CRM solutions
          allow you to leverage technology and ensure proper business
          development with an insightful view of each and every business
          operation.
        </p>

        <div className="md:py-10 py-5">
          <h2 className="font-bold text-[30px] text-center pt-5 md:pt-10 leading-[50px]">
            <span className="bg font-bold text-2xl md:text-4xl">CEO</span>
          </h2>
          <p className="lg:px-16 md:leading-8 leading-6 text-center text-black/70">
            Emmanuel muojeke Founder & CEO A geek at heart, I've been fascinated
            with entrepreneurship and computers as long as I can remember. I
            love building things, the bigger the challenge the better. Most of
            my technology experience is focused around platform
            programming,social networkin, and large scale systems design,FMCG.
          </p>
          <img
            src={ceo}
            className="m-auto rounded-[50%] mt-5 w-[200px] h-[200px]"
            alt=""
          />
        </div>

        <h2 className="text-[30px] text-center pt-10 leading-[50px]">
          <span className="text-[#6665ff] font-bold text-2xl md:text-4xl">
            Teams
          </span>
        </h2>
        <p className="lg:px-5 text-center pb-5 leading-8 font-medium max-w-xl w-fit mx-auto">
          Easy process to your customers. Trusted by over 100+ companies
          worldwide, we are here for your growth throughout.
        </p>

        <div className="md:flex justify-evenly">
          <div className="lg:w-[32.5%] mb-5 md:mb-0">
            <p className="lg:px-5 text-center w-fit mx-auto leading-6 text-black/50 font-medium">
              RAJ Head of Technology Serial angel investor and entrepreneur, Raj
              has founded multiple successful startups based in India. ￼
            </p>
            <img
              src={indian}
              className="m-auto rounded-[50%] w-[200px] h-[200px]"
              alt=""
            />
          </div>

          <div className="lg:w-[32.5%] mb-5 md:mb-0">
            <p className="lg:px-5 leading-6 text-center w-fit mx-auto text-black/50 font-medium">
              Mr Peter Onuh Support Enginner Serial entrepreneur, Peter has
              founded multiple successful startups and work with tech companies
              around the world.
            </p>
            <img
              src={mentor}
              className="m-auto rounded-[50%] w-[200px] h-[200px]"
              alt=""
            />
          </div>

          <div className="lg:w-[32.5%] mb-5 md:mb-0">
            <p className="lg:px-5 leading-6 text-center w-fit mx-auto text-black/50 font-medium">
              Mr Emmanuel Ochaje an established Software Engineer, Emmanuel has
              Collaborated on multiple successful startups and work with tech
              companies
            </p>
            <img
              src={emmy}
              className="m-auto rounded-[50%] w-[200px] h-[200px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentAbout;
