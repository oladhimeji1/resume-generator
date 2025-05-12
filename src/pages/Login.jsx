import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="w-full h-screen p-4 bg-[#212D59]">
      <div className="max-w-[500px] mt-10 mx-auto bg-white rounded-lg shadow-sm">
        <form action="" className="p-4">
          <div className="header flex items-center flex-col gap-4 justify-center mb-6">
            <Link to="/">
              <img src="/logo_1.png" width="200px" alt="logo" />
            </Link>
            <h3 className="text-xl font-bold">Sign in to your account</h3>
          </div>

          <div className="form-group">
            <div className="form-item flex flex-col gap-2 mb-4">
              <label htmlFor="email" className="font-medium text-zinc-800">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-zinc-600 text-xl border shadow-sm rounded-sm py-2 px-4 focus:outline-[#212D59]"
              />
            </div>
            <div className="form-item flex flex-col gap-2 mb-4">
              <label htmlFor="password" className="font-medium text-zinc-800">
                PASSWORD
              </label>
              <input
                type="password"
                className="border-zinc-600 text-xl border shadow-sm rounded-sm py-2 px-4 focus:outline-[#212D59]"
                id="password"
                name="password"
              />
            </div>

            <div className="form-item mb-4">
              <Link className="font-bold text-[#212D59] ">
                Forgot password?
              </Link>
            </div>

            <button className="mb-2 py-3 px-6 rounded-full block w-full text-center bg-[#1842da] text-white text-xl font-bold cursor-pointer">
              Log in
            </button>
            <p className="text-zinc-600 text-sm text-center mb-2">
              By clicking 'Log in' you also agree to our{" "}
              <Link className="underline text-blue-800 font-bold">
                Terms of use
              </Link>{" "}
              <br /> and{" "}
              <Link className="underline text-blue-800 font-bold">
                Privacy Policy{" "}
              </Link>
            </p>
            <p className="text-zinc-600 text-sm text-center mb-1">
              Don't have an account?{" "}
              <Link className="underline text-blue-800 font-bold">Sign up</Link>
            </p>
            <div className="border-zinc-300 border"></div>

            <div className="shadow-sm rounded-sm flex items-center">
              <button className="w-full cursor-pointer mt-4 flex gap-6 items-center justify-center p-3">
                <FaGoogle />
                <span>Sign in with Google </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
