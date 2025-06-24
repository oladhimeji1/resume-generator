import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
export default function Login() {
  const { register, handleSubmit } = useForm();
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(16),
  });
  const onSubmit = (data) => {
    console.log("submitted");
    console.log(data);
  };
  return (
    <div className="w-full h-screen p-4 bg-emerald-900">
      <Link to="/">
        <img src="/logo_1.png" width="200px" alt="logo" />
      </Link>
      <div className="max-w-[500px] mt-5 mx-auto bg-white rounded-lg shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
          <div className="header flex items-center flex-col gap-4 justify-center mb-6">
            <h3 className="text-xl font-bold">Sign in to your account</h3>
          </div>

          <div className="form-group">
            <div className="form-item flex flex-col gap-2 mb-4">
              <label htmlFor="email" className="font-medium text-zinc-800">
                Email Adress
              </label>
              <input
                type="email"
                id="email"
                name="email"
                {...register("email")}
                className="bg-[#e6e6e6] py-3 px-4 block w-full rounded-md focus:outline-none"
              />
            </div>
            <div className="form-item flex flex-col gap-2 mb-4">
              <label htmlFor="password" className="font-medium text-zinc-800">
                Password
              </label>
              <input
                type="password"
                className="bg-[#e6e6e6] py-3 px-4 block w-full rounded-md focus:outline-none"
                id="password"
                name="password"
                {...register("password")}
              />
            </div>

            <div className="form-item mb-4">
              <Link className="font-bold text-none ">Forgot password?</Link>
            </div>

            <button className="mb-2 py-3 px-6 rounded-full block w-full text-center bg-emerald-700 text-white text-xl font-semibold cursor-pointer">
              Log in
            </button>
            {/* <p className="text-zinc-600 text-sm text-center mb-2">
              By clicking 'Log in' you also agree to our{" "}
              <Link className="underline text-blue-800 font-bold">
                Terms of use
              </Link>{" "}
              <br /> and{" "}
              <Link className="underline text-blue-800 font-bold">
                Privacy Policy{" "}
              </Link>
            </p> */}
            <p className="text-zinc-600 text-sm text-center mb-1">
              Don't have an account?{" "}
              <Link to="/signup" className="underline text-blue-800 font-bold">
                Sign up
              </Link>
            </p>
            <div className="border-zinc-300 border"></div>

            <div className="shadow-sm rounded-sm flex items-center">
              <button className="w-full cursor-pointer mt-4 flex gap-6 items-center justify-center p-3">
                <FcGoogle />
                <span>Sign in with Google </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
