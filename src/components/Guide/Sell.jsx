import React from "react";

const Sell = () => {
  return (
    <div className="mx-5 py-5">
      <p className="bg-[#6665ff1a] mb-1 rounded-lg text-[#6665ff] font-medium p-1 w-fit text-[20px] md:p-2 h-fit">
        Selling Products
      </p>

      <h3 className="font-bold">Steps</h3>
      <p className="text-black pb-1 leading-6">
        1. Click the “POS” button to proceed to create sale screen.
      </p>
      <p className="text-black pb-1 leading-6">
        2. Click the “add items” button to proceed with a sale entry.
      </p>
      <p className="text-black pb-1 leading-6">
        3. Select the product you want to sell.
      </p>
      <p className="text-black pb-1 leading-6">
        4. At this page, you can add or reduce quantity of the products using
        the “+” and “-“ buttons.Click “Choose more items” to add more items to
        sell. Click the “Cash in” after everything is fine to make payment.
      </p>
      <p className="text-black pb-1 leading-6">
        5. Choose mode of payment – cash, credit, wallet, Split Payment. Note:
        Payments made on credit or wallet must have customers, click “Add
        Customer” text button8to add customer. Click “Pay” button and the
        transaction is complete
      </p>
    </div>
  );
};

export default Sell;
