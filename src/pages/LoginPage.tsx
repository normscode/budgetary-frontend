import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="bg-black h-screen text-white flex flex-col items-center justify-center">
        <div className="w-full max-w-[380px] mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div className="h-8 w-8 bg-white rounded flex items-center justify-center text-black font-bold text-sm mb-6">
              B
            </div>
            <h1
              id="header-title"
              className="text-xl font-medium text-white tracking-tight"
            >
              Welcome back
            </h1>
            <p id="header-subtitle" className="text-sm text-neutral-500 mt-2">
              Enter your details to access your account
            </p>
          </div>
          <div className="space-y-4">
            <form action="" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-neutral-500"
                >
                  Email
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@example.com"
                  className="w-full bg-neutral-925 border border-neutral-800 rounded-md px-3 py-2 text-sm text-white placeholder:text-neutral-600 transition-colors focus:bg-neutral-900"
                />
              </div>
              <div>
                <div className="">
                  <label
                    htmlFor="password"
                    className="text-xs font-medium text-neutral-500 flex justify-between"
                  >
                    <span>Password</span>
                    <a
                      href="#"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full bg-neutral-925 border border-neutral-800 rounded-md px-3 py-2 text-sm text-white placeholder:text-neutral-600 transition-colors focus:bg-neutral-900"
                />
              </div>
              <Button className="w-full bg-white text-black hover:bg-gray-200">
                Sign In
              </Button>
            </form>
            {/* <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-800"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-neutral-950 px-2 text-neutral-600">
                  Or continue with
                </span>
              </div>
            </div> */}
            <p className="text-center text-xs text-neutral-500 mt-6">
              Don't have an account?
              <Link to="/signup" className="text-white hover:underline ml-1">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
