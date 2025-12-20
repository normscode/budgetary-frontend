import { Link, Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="text-white">
      <div className="flex">
        <aside className="w-64 h-screen border-r border-neutral-800 p-4">
          <div className="flex gap-2">
            <div className="h-6 w-6 bg-white rounded flex items-center justify-center text-black font-bold text-xs">
              B
            </div>
            <Link to="/">
              <div>Budgetary</div>
            </Link>
          </div>

          <nav className="mt-8 flex flex-col gap-2">
            <div className="flex items-center gap-2 p-2 hover:bg-neutral-800 rounded">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  data-icon="lucide:layout-dashboard"
                  className="iconify text-lg iconify--lucide"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                    <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                    <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                    <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                  </g>
                </svg>
              </div>
              <Link to="/">
                <span>Dashboard</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-neutral-800 rounded">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  data-icon="lucide:list"
                  className="iconify text-lg iconify--lucide"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5h.01M3 12h.01M3 19h.01M8 5h13M8 12h13M8 19h13"
                  ></path>
                </svg>
              </div>
              <Link to="/transactions">
                <span>Transactions</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-neutral-800 rounded">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  data-icon="lucide:calculator"
                  className="iconify text-lg iconify--lucide"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                    <path d="M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"></path>
                  </g>
                </svg>
              </div>
              <Link to="/budgets">
                <span>Budgets</span>
              </Link>
            </div>
          </nav>
        </aside>

        <main className="flex-1 flex flex-col h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Homepage;
