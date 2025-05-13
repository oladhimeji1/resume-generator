import { FaGoogle } from "react-icons/fa";
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
      .required("Confirm Password is required")
      .oneOf([yup.ref("password"), null], "Password don't match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log("submitted");
    console.log(data);
  };
  return (
    <div className="w-full h-screen p-2 bg-emerald-900">
      <div className="max-w-[500px] mt-5 mx-auto bg-white rounded-lg shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
          <div className="header flex items-center flex-col gap-4 justify-center mb-6">
            <Link to="/">
              <img src="/logo_1.png" width="200px" alt="logo" />
            </Link>
            <h3 className="text-xl font-bold">Create an account with us</h3>
          </div>

          <div className="form-group">
            <div className="form-item flex flex-col gap-2 mb-2">
              <label htmlFor="email" className="font-medium text-zinc-800">
                EMAIL ADDRESS
              </label>
              <input
                type="text"
                id="email"
                name="email"
                {...register("email")}
                style={{
                  outlineColor: `${errors.email?.message ? "red" : "#212D59"}`,
                }}
                className="border-zinc-600 text-xl border shadow-sm rounded-sm py-2 px-4 focus:outline-[#212D59]"
              />
            </div>
            <div className="form-item flex flex-col gap-2 mb-2">
              <label htmlFor="password" className="font-medium text-zinc-800">
                PASSWORD
              </label>
              <input
                type="password"
                className="border-zinc-600 text-xl border shadow-sm rounded-sm py-2 px-4 focus:outline-[#212D59]"
                id="password"
                style={{
                  outlineColor: `${
                    errors.password?.message ? "red" : "#212D59"
                  }`,
                }}
                name="password"
                {...register("password")}
              />
            </div>
            <div className="form-item flex flex-col gap-2 mb-2">
              <label
                htmlFor="confirm_password"
                className="font-medium text-zinc-800"
              >
                CONFIRM PASSWORD
              </label>
              <input
                type="password"
                style={{
                  outlineColor: `${
                    errors.confirmPassword?.message ? "red" : "#212D59"
                  }`,
                }}
                className="border-zinc-600 text-xl border shadow-sm rounded-sm py-2 px-4 focus:outline-[#212D59]"
                id="confirm_password"
                name="confirm_password"
                {...register("confirmPassword")}
              />
            </div>

            <button className="mb-2 py-3 px-6 rounded-full block w-full text-center bg-[#1842da] text-white text-xl font-bold cursor-pointer">
              Create account
            </button>
            <p className="text-zinc-600 text-sm text-center mb-2">
              By clicking creating an account, you also agree to our{" "}
              <Link className="underline text-blue-800 font-bold">
                Terms of use
              </Link>{" "}
              <br /> and{" "}
              <Link className="underline text-blue-800 font-bold">
                Privacy Policy{" "}
              </Link>
            </p>
            <p className="text-zinc-600 text-sm text-center mb-1">
              Already have an account?{" "}
              <Link to="/login" className="underline text-blue-800 font-bold">
                Login
              </Link>
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
