import React from "react";

const Suppliers = () => {
  return (
    <div className="mx-5 py-5">
      <p className="bg-[#6665ff1a] rounded-lg text-[#6665ff] font-medium p-1 w-fit text-[12px] md:text-2xl md:p-2 h-fit">
        Suppliers
      </p>

      <p className="text-black py-5 leading-6">
        Have you been struggling with managing your suppliers and having
        difficulty with tracking payment and stock purchasing history, well…
        worry not more because GimoPOS brings the solution right at your figure
        tips. With GimoPOS, it is possible to manage all your suppliers with
        simple steps, follow the steps below to correctly manage your suppliers.
      </p>

      <p className=" my-2 rounded-lg text-[#6665ff] font-bold w-fit text-[20px] h-fit">
        Add Suppliers
      </p>

      <h3 className="font-bold">Steps</h3>
      <p className="text-black pb-1 leading-6">
        1. From the “Home Page” click the “Suppliers” button.
      </p>
      <p className="text-black pb-1 leading-6">
        2. At the top of the page, click the “Add Supplier” button.
      </p>
      <p className="text-black pb-1 leading-6">
        3. Fill in supplier’s name and phone number as indicated and click
        “Save” to add supplier. Your supplier has been added successfully.
      </p>

      <p className=" my-2 rounded-lg text-[#6665ff] font-bold w-fit text-[20px] h-fit">
        Managing Suppliers' Account
      </p>

      <h3 className="font-bold">Steps</h3>
      <p className="text-black pb-1 leading-6">
        1. From the suppliers’ page, view all your supplies – suppliers with
        unpaid invoice will have a red text indicating invoice value. Click
        “View Account” to view supplier’s details.
      </p>
      <p className="text-black pb-1 leading-6">
        2. To edit supplier details, click the “Edit Icon” at the top of the
        screen.
      </p>
      <p className="text-black pb-1 leading-6">
        3. To delete supplier, click the “delete icon”. Note that you cannot
        delete suppliers with active invoices.
      </p>

      <p className="text-black pb-1 leading-6">
        4. Click the “message icon” to message supplier, and the “call icon” to
        call the supplier.
      </p>

      <p className=" my-2 rounded-lg text-[#6665ff] font-bold w-fit text-[20px] h-fit">
        Managing Pending invoices
      </p>

      <h3 className="font-bold">Steps</h3>
      <p className="text-black pb-1 leading-6">
        1.1. To manage pending invoices, click the on an individual transaction
        under the pending tab.
      </p>
      <p className="text-black pb-1 leading-6">
        2. You will view a digital receipt that indicates payment status; click
        the “Pay Now” button to settle payment.
      </p>
      <p className="text-black pb-1 leading-6">
        3. In the pop up box that appears, enter amount to pay, and click “Save”
        to update payment.
      </p>
      <p className="text-black pb-1 leading-6">
        4. Choose the range date you prefer by clicking the “Choose Date Range”
        at the top of the screen.
      </p>
    </div>
  );
};

export default Suppliers;
