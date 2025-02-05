import Bar from "./Bar";

const names = [
  {
    name: "John M.",
    occupation: "Bantu Auto Spares.",
    comment: "I have 12 branches and i manage all with GimoPOS, Kudos men!.",
  },
  {
    name: "Fred K",
    occupation: "Watu Wholesalers.",
    comment:
      "I love using GimoPOS, i get all my data backups every day in an excel format.",
  },
  {
    name: "Alive Gu. ",
    occupation: "Auto Spa.",
    comment: "Am happy now i can get online sales with you.",
  },
];

const Testimoials = () => {
  return (
    <div className="py-8 px-[6rem] flex justify-between">
      <div>
        <p className="bg-[#6665ff1a] rounded-lg text-[#8870c4] font-medium p-1 w-fit h-[30px] mb-2 text-[14px]">
          GimoPOS - Testimonoials
        </p>

        <h2>
          <span className="bg text-[40px] font-bold">Love From Customers</span>
        </h2>
        <p className="font-normal text-[15px] w-[] mr-2">
          GimoPOS has received love from a wide range of customers
        </p>

        <div className="mt-5 flex justify-between">
          <p>
            <span className="text-[3rem] text-[#6665ff]">
              <i class="bx bx-cloud-download"></i>
              <br />
            </span>
            <span className="text-4xl font-bold text-[#6665ff]">100+</span>
            <br />
            <span className="text-gray-500">Downloads</span>
          </p>

          <p>
            <span className="text-[3rem] text-[#6665ff]">
              <i class="bx bxs-star"></i>
              <br />
            </span>
            <span className="text-4xl font-bold text-[#6665ff]">4.8</span>
            <br />
            <span className="text-gray-500">Based on 75 Reviews</span>
          </p>
        </div>
      </div>

      <div>
        {/* bar */}
        <Bar names={names} />
      </div>
    </div>
  );
};

export default Testimoials;

/* <div className="w-[600px] h-[px] px-5 py-5 rounded-lg shadow-lg">
          <div className="flex">
            <span
              className="mr-2 text-yellow-400
            "
            >
              <i class="bx bxs-star"></i>
            </span>
            <span
              className="mr-2 text-yellow-400
            "
            >
              <i class="bx bxs-star"></i>
            </span>
            <span
              className="mr-2 text-yellow-400
            "
            >
              <i class="bx bxs-star"></i>
            </span>
            <span
              className="mr-2 text-yellow-400
            "
            >
              <i class="bx bxs-star"></i>
            </span>{" "}
            <span
              className="mr-2 text-yellow400
            "
            >
              <i class="bx bxs-star"></i>
            </span>{" "}
          </div>
          <p>
            “I have 12 branches and i manage all with GimoPOS, Kudos men!.”
          </p>
          <p className="text-gray-500 pt-6 text-[12px]">
            <span className="text-black pt-6 text-[12px]">John M.</span>/ Bantu
            Auto Spares.
          </p>
        </div> */
