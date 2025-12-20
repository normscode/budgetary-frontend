const TransactionPage = () => {
  return (
    <section className="flex-1 flex flex-col h-screen">
      <div className="flex justify-between p-4 w-full">
        <h2>Transactions</h2>
        <div className="flex gap-2">
          <div>+</div>
          <div>New Transaction</div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        <div className="bg-neutral-925 border border-neutral-800 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-neutral-900 text-neutral-500 font-medium text-xs">
                <tr>
                  <th className="p-4 pl-6 font-medium w-1/3">Note</th>
                  <th className="p-4 font-medium">Category</th>
                  <th className="p-4 font-medium">Date</th>
                  <th className="p-4 pr-6 text-right font-medium">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800">
                <tr className="group hover:bg-neutral-900 transition-colors">
                  <td className="p-4 pl-6 text-neutral-200">Grocery Run</td>
                  <td className="p-4 text-neutral-400">
                    <span className="px-2 py-1 rounded bg-neutral-800 border border-neutral-700 text-xs">
                      Food
                    </span>
                  </td>
                  <td className="p-4 text-neutral-500 tabular-nums">
                    Oct 24, 2023
                  </td>
                  <td className="p-4 pr-6 text-right text-neutral-200 tabular-nums">
                    -$124.50
                  </td>
                </tr>
                <tr className="group hover:bg-neutral-900 transition-colors">
                  <td className="p-4 pl-6 text-neutral-200">Salary Deposit</td>
                  <td className="p-4 text-neutral-400">
                    <span className="px-2 py-1 rounded bg-neutral-800 border border-neutral-700 text-xs">
                      Income
                    </span>
                  </td>
                  <td className="p-4 text-neutral-500 tabular-nums">
                    Oct 23, 2023
                  </td>
                  <td className="p-4 pr-6 text-right text-emerald-500 tabular-nums">
                    +$3,000.00
                  </td>
                </tr>
                <tr className="group hover:bg-neutral-900 transition-colors">
                  <td className="p-4 pl-6 text-neutral-200">Electric Bill</td>
                  <td className="p-4 text-neutral-400">
                    <span className="px-2 py-1 rounded bg-neutral-800 border border-neutral-700 text-xs">
                      Utilities
                    </span>
                  </td>
                  <td className="p-4 text-neutral-500 tabular-nums">
                    Oct 20, 2023
                  </td>
                  <td className="p-4 pr-6 text-right text-neutral-200 tabular-nums">
                    -$150.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionPage;
