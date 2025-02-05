import React from "react";

const Customers = () => {
  return (
    <div className="mx-5 py-5">
      <p className="bg-[#6665ff1a] rounded-lg text-[#6665ff] font-medium p-1 w-fit md:text-2xl md:p-2 h-fit">
        Customers
      </p>

      <p className="text-black py-5 leading-6">
        GimoPOS Gives you an option manage customers, some of the
        functionalities include adding customer, manage
      </p>

      <p className=" my-2 rounded-lg text-[#6665ff] font-bold w-fit md:text-[20px] h-fit">
        Adding Customers
      </p>

      <h3 className="font-bold">Steps</h3>
      <p className="text-black pb-1 leading-6">
        1. From “Home Page” click the “Customers” section.
      </p>
      <p className="text-black pb-1 leading-6">
        2. At the top of the page, click the “Add Customerr” button.
      </p>
      <p className="text-black pb-1 leading-6">
        3. Fill in all details and click the “Save” button to add customer.
      </p>

      <p className=" my-2 rounded-lg text-[#6665ff] font-bold w-fit md:text-[20px] h-fit">
        Managing Customers' Account
      </p>

      <h3 className="font-bold">Steps</h3>
      <p className="text-black pb-1 leading-6">
        1. While on the “Customers Page”, click the “View Account” to access an
        individual’s account.
      </p>
      <p className="text-black pb-1 leading-6">
        2. Use the “Edit Icon” and the “Delete Icon” to edit and delete customer
        details respectively.
      </p>
      <p className="text-black pb-1 leading-6">
        3. When goods are sold on credit for a specific customer, entries will
        be aligned under the “Credit” tab – click an individual transaction to
        view details.
      </p>

      <p className="text-black pb-1 leading-6">
        4. Click “Pay Now” to update payment status to the customer.
      </p>

      <p className=" my-2 rounded-lg text-[#6665ff] font-bold w-fit md:text-[20px] h-fit">
        Customers Wallet
      </p>

      <h3 className="font-bold">Steps</h3>
      <p className="text-black pb-1 leading-6">
        1. From the customer’s profile, click the “wallet” section.
      </p>
      <p className="text-black pb-1 leading-6">
        2. Monitor Wallet balance at the top of the page.
      </p>
      <p className="text-black pb-1 leading-6">
        3. To deposit to a customer’s account, click the “Make Deposit” button.
      </p>
      <p className="text-black pb-1 leading-6">
        4. Enter amount, the click the “Deposit” button. Note: You cannot
        deposit for a customer’s account with unpaid debt, clear the pending
        debt before proceeding to deposit to wallet.
      </p>
      <p className="text-black pb-1 leading-6">
        5. Deposit history and usage history will all be aligned in the
        “Deposit” and “Usage” tabs.
      </p>
    </div>
  );
};

export default Customers;
