import React from "react";

const Shop = (props) => {
  return (
    <div className="mx-5 py-5">
      <p className="bg-[#6665ff1a] rounded-lg text-[#6665ff] font-medium p-1 w-fit md:text-2xl md:p-2 h-fit">
        Shop
      </p>

      <p className="text-black py-5 leading-6">
        GimoPOS allows users to have more than one shop – this enables you to
        manage every shop individually. This section will explore shop
        functionality including creating several shops, editing shop details,
        and deleting shop.
      </p>

      <p className=" my-2 rounded-lg text-[#6665ff] font-bold w-fit text-[20px] h-fit">
        Adding Shop
      </p>
      <h3 className="font-bold">Steps</h3>
      <p className="text-black pb-1 leading-6">
        1. While in the “Home Page” click “Shops” from the bottom navigation
        bar.
      </p>
      <p className="text-black pb-1 leading-6">
        2. Click the “Add Shop” button.
      </p>
      <p className="text-black pb-1 leading-6">
        3. Fill in all the details as indicated, accept terms and conditions,
        and click the “Create” button. Your shop has been created successfully.
      </p>

      <p className=" my-2 rounded-lg text-[#6665ff] font-bold w-fit text-[20px] h-fit">
        Edit Shop
      </p>

      <h3 className="font-bold">Steps</h3>
      <p className="text-black pb-1 leading-6">
        1. Click the specific shop that you want to edit.
      </p>
      <p className="text-black pb-1 leading-6">
        2. Click “Shop details” according to your specifications, and click the
        “Update Shop” button to update shop details. You can as well delete the
        shop if need be.
      </p>
    </div>
  );
};

export default Shop;
