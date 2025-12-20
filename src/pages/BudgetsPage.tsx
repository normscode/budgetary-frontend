const BudgetsPage = () => {
  return (
    <>
      <section className="flex-1 flex flex-col h-screen">
        <div className="flex justify-between p-4 w-full">
          <h2>Budgets</h2>
          <div className="flex gap-2">
            <div>+</div>
            <div>New Transaction</div>
          </div>
        </div>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-1 gap-6 max-w-2xl">
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-medium text-neutral-400">
                Monthly Budget History
              </h2>
              <button className="text-xs text-white bg-neutral-800 hover:bg-neutral-700 px-3 py-1.5 rounded border border-neutral-700 transition-colors">
                Set Budget
              </button>
            </div>

            <div className="p-5 bg-neutral-925 border border-neutral-800 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-white font-medium">October 2023</h3>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Current Month
                  </p>
                </div>
                <span className="text-lg font-medium text-white">
                  $3,000.00
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs text-neutral-400">
                  <span>Spent: $1,250</span>
                  <span>42%</span>
                </div>
                <div className="w-full bg-neutral-900 h-2 rounded-full overflow-hidden border border-neutral-800">
                  <div className="bg-white h-full rounded-full w-[42%]"></div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-neutral-925 border border-neutral-800 rounded-lg opacity-75 hover:opacity-100 transition-opacity">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-neutral-200 font-medium">
                    September 2023
                  </h3>
                </div>
                <span className="text-lg font-medium text-neutral-400">
                  $2,800.00
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs text-neutral-400">
                  <span>Spent: $2,750</span>
                  <span>98%</span>
                </div>
                <div className="w-full bg-neutral-900 h-2 rounded-full overflow-hidden border border-neutral-800">
                  <div className="bg-neutral-600 h-full rounded-full w-[98%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BudgetsPage;
