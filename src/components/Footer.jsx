import { Link } from "react-router-dom";
import Container from "./container";

const Footer = () => {
  return (
    <div className="min-h-50 py-8 bg-gray-900 text-white">
      <Container>
      <div className="max-w-full mx-auto w-full">
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
      </Container>
    </div>
  );
};

export default Footer;
