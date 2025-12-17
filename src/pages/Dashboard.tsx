const Dashboard = () => {
  return (
    <div className="text-white">
      <div className="flex">
        <aside className="w-64 h-screen border-r border-neutral-800 p-4">
          <div>
            <div>Logo</div>
            <div>Budgetary</div>
          </div>
        </aside>

        <main className="flex-1 flex flex-col h-screen">
          <div className="flex justify-between p-4 w-full">
            <h2>Dashboard</h2>
            <div className="flex gap-2">
              <div>+</div>
              <div>New Transaction</div>
            </div>
          </div>

          <div className="p-4 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-lg">
                <h2 className="uppercase text-neutral-500">Monthly Budget</h2>
                <p className="text-2xl mt-2">$3,000.00</p>
                <p className="text-neutral-500">October 15, 2025</p>
              </div>
              <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-lg">
                <h2 className="uppercase text-neutral-500">Spent</h2>
                <p className="text-2xl mt-2">$1,250.00</p>
                <div className="w-full bg-neutral-800 h-1 mt-3 rounded-full overflow-hidden">
                  <div className="bg-white h-full rounded-full w-[42%]"></div>
                </div>
              </div>
              <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-lg">
                <h2 className="uppercase text-neutral-500">Remaining</h2>
                <p className="text-2xl mt-2 text-green-300">$1,750.00</p>
              </div>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
              <div className="px-5 py-3 border-b border-neutral-800 flex justify-between items-center">
                <h3>Recent Activity</h3>
                <button className="text-xs text-neutral-500 hover:text-white">
                  View All
                </button>
              </div>
              <div className="px-5 py-3 flex justify-between items-center border-b border-neutral-800">
                <div className="flex flex-col">
                  <h2>Grocery Run</h2>
                  <p className="text-sm text-neutral-500">Food & Dining</p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-sm">- $45.00</p>
                  <p className="text-xs">Oct 15</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
