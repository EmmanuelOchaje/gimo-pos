import React from "react";

const Bar = ({ names }) => {
  //   console.log(props);
  return (
    <div>
      {names.map((det, idx) => (
        <div className="w-[600px] h-[px] px-5 py-5 rounded-lg shadow-lg">
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
          <p>{det.comment}</p>
          <p className="text-gray-500 pt-6 text-[12px]">
            <span className="text-black pt-6 text-[12px]">{det.name}</span>/
            {det.occupation}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Bar;
