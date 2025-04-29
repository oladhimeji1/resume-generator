import { Link } from "react-router-dom";
import notFound from "../assets/images/svg/not-found.svg";

export default function PageNotFound() {
  return (
    <section className="min-h-screen">
      <div className="container text-center max-w-6xl mx-auto flex items-center justify-center flex-col gap-4 min-h-screen">
        <img src={notFound} loading='eager' className='w-70' alt="404 Illustration" />
        <h1 className="text-3xl text-emerald-700 font-extrabold md:text-5xl ">
          Oops! Page Not Found
        </h1>
        <p className="max-w-xl text-center text-sm text-zinc-700 font-light sm:text-xl">
          It looks like the page you're looking doesn't exist or has been moved.
          Don't worry. We're here to help you find your way.
        </p>

        <Link
          className="block py-4 px-12 bg-emerald-600 text-white font-bold rounded-full"
          to="/"
        >
          Back to Homepage
        </Link>
      </div>
    </section>
  );
}
