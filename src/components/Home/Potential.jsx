import mobile from "../../assets/images/gimo-2.jpg";

const Potential = () => {
  return (
    <div className="py-8 px-4 md:px-[6rem] md:flex justify-between">
      <div className="w-[100%]">
        <img
          src={mobile}
          alt=""
          className="m-auto w-[400px] h-[350px] rounded-xl"
        />
      </div>

      <div>
        <p className="bg-[#6665ff1a] rounded-lg text-[#6665ff] font-medium p-1 w-fit h-[30px] mb-2 text-[12px] md:text-[14px]">
          GimoPOS - Potential
        </p>

        <h2>
          <span className="bg text-2xl md:text-[40px] font-bold">
            Online Store
          </span>
        </h2>
        <p className="font-normal text-[15px] w-[] mr-2">
          When your business is listed with GimoPOS, we automatically generate a
          landing page for your website and you can start receiving online
          orders/sales.
        </p>
        <div className="mt-5">
          <p className="mb-5 flex items-center w-[] font-semibold text-[15px] ml-3">
            <i class="bx bxs-hand"></i>
            Free Ecommerce website and online marketing
          </p>
          <p className="mb-5 flex items-center w-[] font-semibold text-[15px] ml-3">
            <i class="bx bxs-cog"></i>
            Receing emails and notifications on new online sales
          </p>
        </div>
      </div>
    </div>
  );
};

export default Potential;
