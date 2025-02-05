const Finance = () => {
  return (
    <div className="mx-5 py-5">
      <p className="bg-[#6665ff1a] rounded-lg text-[#6665ff] font-medium p-1 w-fit text-[12px] md:text-2xl md:p-2 h-fit">
        Finances
      </p>

      <p className="text-black/80 py-5 leading-6">
        Finance is at the core for business operation, it enables the management
        to track the growth of a business, and make appropriate decisions –
        well, GimoPOS give you an option to effectively track financial records
        and improve accountability. Follow the steps below to track financial
        operations.
      </p>
      <p className=" my-2 rounded-lg text-[#6665ff] font-bold w-fit text-[20px] h-fit">
        Tracking finances
      </p>
      <h3 className="font-bold">Steps</h3>
      <p className="text-black/80 pb-1 leading-6">
        1. From the “Home Page” click the “Profit & Expenses Summary” section.
      </p>
      <p className="text-black/80 pb-1 leading-6">
        2. Click “New Product” to introduce a new product in the self.
      </p>
      <p className="text-black/80 pb-1 leading-6">
        3. Add product details based on the requirements defined. Note that all
        fields with “*” must be filled in. After completing, click the “Add
        Product” button at the bottom of the screen.
      </p>
      {/* view and manipulate */}

      <p className=" my-2 rounded-lg text-[#6665ff] font-bold p-1 w-fit text-[20px] h-fit">
        Profits
      </p>
      <h3 className="font-bold">Steps</h3>
      <p className="text-black/80 pb-1 leading-6">
        1. Click the “Gross Profits” provision to view sales profits
        calculations.
      </p>
      <p className="text-black/80 pb-1 leading-6">
        2. Select period “Today, Yesterday, This Week etc” range using the
        functionality at the top of the screen
      </p>
      <p className="text-black/80 pb-1 leading-6">
        3. To view all sales that have contributed to the profits, click “Total
        Sales”.
      </p>
      <p className="text-black/80 pb-1 leading-6">
        4. View all sales made in cash, credit, and the day’s sales.
      </p>

      {/*  Stocking-In An existing Product */}

      <p className=" my-2 rounded-lg text-[#6665ff] font-bold p-1 w-fit text-[20px]  h-fit">
        Expenses
      </p>
      <h3 className="font-bold">Steps</h3>
      <p className="text-black pb-1 leading-6">
        1. Under “Home” page, select the “Expenses” section.
      </p>
      <p className="text-black pb-1 leading-6">
        2. Click the “Add Expenses” button to add an expense.
      </p>
      <p className="text-black pb-1 leading-6">
        3. Add major category of the expense, eg. Salaries, bills. Enter name of
        the specific expense, fill in the amount, and click “Save” to add
        expense entry.
      </p>
      <p className="text-black pb-1 leading-6">
        4. Select period “Today, Yesterday, This Week etc” range using the
        functionality at the top of the screen
      </p>

      <p className=" my-2 rounded-lg text-[#6665ff] font-bold p-1 w-fit text-[20px]  h-fit">
        Sales
      </p>
      <h3 className="font-bold">Steps</h3>
      <p className="text-black pb-1 leading-6">
        1. Click the “Sales & Orders” section under the “Home” page.
      </p>
      <p className="text-black pb-1 leading-6">
        2. Navigate “Today” to view sales made on the specific day ,“Current
        Month” to view sales made in that month.
      </p>
      <p className="text-black pb-1 leading-6">
        3. Click on a specific sale entry to view details of the sale.
      </p>
      <p className="text-black pb-1 leading-6">
        4. You’ll be able to view a digital receipt that explains more about the
        sales entry – amount, items sold, payment status, date, and cashier
        name.
      </p>

      <p className=" my-2 rounded-lg text-[#6665ff] font-bold p-1 w-fit text-[20px]  h-fit">
        CashFlow Manager
      </p>
      <h3 className="font-bold">Steps</h3>
      <p className="text-black pb-1 leading-6">
        1. Click “Cashflow” under the “Home page.
      </p>
      <p className="text-black pb-1 leading-6">
        2. View by specific date range by filtering by date.
      </p>
      <p className="text-black pb-1 leading-6">
        3. View cash at hand and cash at bank.
      </p>
      <p className="text-black pb-1 leading-6">
        4. Click “Add Cash In” to inject funds to the business.
      </p>
      <p className="text-black pb-1 leading-6">
        5. Select category of the financial injection, the preferred name, and
        the amount. Click the “Save” button to add the entry.
      </p>
      <p className="text-black pb-1 leading-6">
        6. When removing cash out of the business, use the “Add Cash Out”
        section.
      </p>
      <p className="text-black pb-1 leading-6">
        7. Fill in the category of the cashout, preferable name and the amount,
        and click the “Save” button to add the entry.
      </p>
    </div>
  );
};

export default Finance;
