import React from "react";

const Stock = () => {
  return (
    <div>
      <div className="mx-5 py-5">
        <p className="bg-[#6665ff1a]  rounded-lg text-[#6665ff] font-medium p-1 w-fit text-2xl md:p-2 h-fit">
          Stock
        </p>
        {/* Add Product */}
        <p className="my-2 rounded-lg text-[#6665ff] font-bold text-[20px]  p-1 w-fit h-fit">
          Adding Products to shop
        </p>
        <h3 className="font-bold">Steps</h3>
        <p className="text-black pb-1 leading-6">
          1. On the “Home Page” click “Stock” button to add new product.
        </p>
        <p className="text-black pb-1 leading-6">
          2. Click “New Product” to introduce a new product in the self.
        </p>
        <p className="text-black pb-1 leading-6">
          3. Add product details based on the requirements defined. Note that
          all fields with “*” must be filled in. After completing, click the
          “Add Product” button at the bottom of the screen.
        </p>
        {/* view and manipulate */}

        <p className=" my-2 rounded-lg text-[#6665ff] font-bold p-1 w-fit text-[20px] h-fit">
          View and manipulate Stock
        </p>
        <h3 className="font-bold">Steps</h3>
        <p className="text-black -1 leading-6">
          1. On the “Home Page” click “Stock” button to add new product.
        </p>
        <p className="text-black pb-1 leading-6">
          2. At this page, you can search for a specific product by typing its
          name, filter items depending on your preference, and you can click on
          a specific product for more actions such as Product History, Edit the
          Product, Generate Barcode, and Delete the product. View the indicated
          sections for the identified action.
        </p>

        {/*  Stocking-In An existing Product */}

        <p className=" my-2 rounded-lg text-[#6665ff] font-bold p-1 w-fit text-[20px] h-fit">
          Stocking-In An existing Product
        </p>
        <h3 className="font-bold">Steps</h3>
        <p className="text-black pb-1 leading-6">
          1. Under the “Stock” page, click the “Stock in” button.
        </p>
        <p className="text-black pb-1 leading-6">
          2. Select the product you want to stock-in by clicking the “Select
          Products to Stock” section.
        </p>
        <p className="text-black pb-1 leading-6">
          3. From your stock list, select the item you are purchasing to add to
          shelf.
        </p>
        <p className="text-black pb-1 leading-6">
          4. At this point, you can edit details of the product by clicking the
          “Change Price” button to change price of the product, enter the number
          of units you are purchasing, and click the “Create Purchase” button
          after completing to select payments.
        </p>
        <p className="text-black pb-1 leading-6">
          5. The product has been successfully stocked-in; you can confirm by
          clicking the “View Products” in the “Stock’s Page” and view new stock
          balance.
        </p>
        <p className="text-black pb-1 leading-6">
          6. You can as well view purchase history under the “Stock’s Page”
          under “Purchase”.
        </p>

        {/*  Count */}

        <p className=" my-2 rounded-lg text-[#6665ff] font-bold p-1 w-fit text-[20px] h-fit">
          Count
        </p>
        <h3 className="font-bold">Steps</h3>
        <p className="text-black pb-1 leading-6">
          1. Click the “Count” Button.
        </p>
        <p className="text-black  pb-1 leading-6">
          2. In this page, you can search the product using product name, view
          count history, Sort by user preference, and add or reduce count. Click
          the “OK” button to update the count of the product.
        </p>

        {/*  Bad Stock */}

        <p className=" my-2 rounded-lg text-[#6665ff] font-bold p-1 w-fit text-[20px] h-fit">
          Bad Stock
        </p>
        <h3 className="font-bold">Steps</h3>
        <p className="text-black  pb-1 leading-6">
          1. Click the “Bad Stock” button under the Stock’s page.
        </p>
        <p className="text-black  pb-1 leading-6">2. Click “Add New” button.</p>
        <p className="text-black  pb-1 leading-6">
          3. In this page, select the bad product under “Select Product”, input
          the number of spoilt items, give a reason, and click the “Save” button
          to update.
        </p>

        {/*  Transfer Stock */}

        <p className=" my-2 rounded-lg text-[#6665ff] font-bold p-1 w-fit text-[20px] h-fit">
          Transfer Stock
        </p>
        <h3 className="font-bold">Steps</h3>
        <p className="text-black  pb-1 leading-6">
          1. Click the “Transfer” button under the Stock’s page.
        </p>
        <p className="text-black  pb-1 leading-6">
          2. Select the shop you want to transfer to, and complete the process.
          You can also view transfer history at the top of the page.
        </p>
        <p className="text-black  pb-1 leading-6">
          3. In this page, select the product you want to transfer to the
          selected shop
        </p>
        <p className="text-black  pb-1 leading-6">
          4. Under this transfer page, you can add “+” or reduce “-” the number
          of the particular product you are transfering.
        </p>
      </div>
    </div>
  );
};

export default Stock;
