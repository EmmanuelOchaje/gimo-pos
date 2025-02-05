import React from "react";

const Cashier = () => {
  return (
    <div className="mx-5 py-5">
      <p className="bg-[#6665ff1a] rounded-lg text-[#6665ff] font-medium p-1 w-fit md:text-2xl md:p-2 h-fit">
        Cashier
      </p>

      <p className="text-black py-5 leading-6">
        GimoPOS allows an Admin (shop owner) to add cashiers, edit their
        details, give and deny permission, as well as delete cashiers. The
        actions of cashiers are entirely controlled the shop owner – follow the
        steps below to explore cashiers functionality
      </p>

      <p className=" my-2 rounded-lg text-[#6665ff] font-bold w-fit text-[20px] h-fit">
        Adding Cashier
      </p>
      <h3 className="font-bold">Steps</h3>
      <p className="text-black pb-1 leading-6">
        1. While in the “Home Page” click “Attendants” from the bottom
        navigation bar.
      </p>
      <p className="text-black pb-1 leading-6">
        2. Click the “Add Attendant” button.
      </p>
      <p className="text-black pb-1 leading-6">
        3. Enter attendant user name and custom password. click “next” and give
        privileges to the cashier depending on their roles in the enterprise;
        click the “Update Changes” to complete action.
      </p>

      <p className=" my-2 rounded-lg text-[#6665ff] font-bold w-fit text-[20px] h-fit">
        Edit Cashier
      </p>

      <h3 className="font-bold">Steps</h3>
      <p className="text-black pb-1 leading-6">
        1. Click “Attendants” and edit Attendants in ${`>`} section .
      </p>
      <p className="text-black pb-1 leading-6">
        2. You can update cashier username, update their passwords, and enable
        or disable permissions.
      </p>
    </div>
  );
};

export default Cashier;
