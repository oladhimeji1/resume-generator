import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export default function Login() {
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(8).max(16).required("Password is required"),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "Password don't match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data, e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-screen px-4 py-2 bg-emerald-900">
      <Link to="/">
        <img src="/resume_logo_green.jpg" width="200px" alt="logo" />
      </Link>
      <div className="max-w-[500px] mx-auto bg-white rounded-lg my-3 shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
          <div className="header flex items-center flex-col gap-4 justify-center mb-6">
            <h3 className="text-xl font-bold text-center">
              Create an account with us
            </h3>
          </div>

          <div className="form-group">
            <div className="form-item flex flex-col gap-2 mb-2">
              <label htmlFor="email" className="font-medium text-zinc-800">
                Email Address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                {...register("email")}
                style={{
                  outlineColor: `${errors.email?.message ? "red" : "#212D59"}`,
                }}
                className={`bg-[#e6e6e6] py-3 px-4 block w-full ${
                  errors.email?.message ? "outline outline-red-500" : ""
                } rounded-md`}
              />
            </div>
            <div className="form-item flex flex-col gap-2 mb-2">
              <label htmlFor="password" className="font-medium text-zinc-800">
                Password
              </label>
              <input
                type="password"
                className={`bg-[#e6e6e6] py-3 px-4 block w-full ${
                  errors.password?.message ? "outline outline-red-500" : ""
                } rounded-md`}
                id="password"
                name="password"
                {...register("password")}
              />
            </div>
            <div className="form-item flex flex-col gap-2 mb-2">
              <label
                htmlFor="confirm_password"
                className="font-medium text-zinc-800"
              >
                Confirm Password
              </label>
              <input
                type="password"
                className={`bg-[#e6e6e6] py-3 px-4 block w-full ${
                  errors.confirmPassword?.message
                    ? "outline outline-red-500"
                    : ""
                } rounded-md`}
                id="confirm_password"
                name="confirm_password"
                {...register("confirmPassword")}
              />
            </div>

            <button className="mt-5 py-3 px-6 rounded-full block w-full text-center bg-emerald-700 text-white text-xl font-semibold cursor-pointer">
              Create account
            </button>
            <p className="text-zinc-600 text-sm text-center mb-2">
              By creating an account, you also agree to our{" "}
              <Link to="/policy" className="underline text-blue-800 font-bold">
                Terms of use and Policy
              </Link>{" "}
            </p>
            <p className="text-zinc-600 text-sm text-center mb-1">
              Already have an account?{" "}
              <Link to="/login" className="underline text-blue-800 font-bold">
                Login
              </Link>
            </p>

            <hr />

            <div className="rounded-sm flex items-center">
              <button className="w-full cursor-pointer mt-4 flex gap-2 items-center justify-center p-3">
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
