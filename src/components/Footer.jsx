import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="min-h-50 p-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto w-[95%]">
        <div className="grid grid-cols-2 justify-between gap-8 items-start">
          <div className="flex flex-col gap-10">
            <img src="/logo_1.png" alt="" width={250} />
            <div className="flex flex-col gap-8">
              <h4 className="font-bold text-lg">Contact</h4>
              <ul className="flex flex-col gap-4">
                <p>09130327299</p>
                <p>Mon-Sun - 9am - 9pm</p>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="font-bold text-lg">About</h4>
            <ul className="flex flex-col gap-4">
              <Link to="">Terms of Use</Link>
              <Link to="">Privacy Policy</Link>
            </ul>
          </div>
        </div>

        <p className="text-white text-center font-bold text-sm mt-18">
          &copy; {new Date().getFullYear()}, ResumeWizard. All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
