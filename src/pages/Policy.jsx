import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function Policy() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-30 min-h-screen bg-gray-50">
        <div className="flex-1 flex flex-col items-center px-4 py-12">
          <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-extrabold text-emerald-700 mb-2">
                Our Policies
              </h1>
              <p className="text-gray-600 text-lg">
                Please read our Privacy Policy, Terms & Conditions, Terms of Use
                carefully.
              </p>
            </div>

            {/* Privacy Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Privacy Policy
              </h2>
              <p className="text-gray-600 mb-2">
                At Intelligent CV 247, your privacy is important to us. We
                collect only the information necessary to process your resume
                and provide you with the best building experience. Your data is
                stored securely and never shared with third parties except as
                required to fulfill your order or by law.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>We use secure encryption for all entries.</li>
                <li>Your personal data is never sold or rented.</li>
                <li>
                  You can request to view, update, or delete your data at any
                  time.
                </li>
                <li>Cookies are used to enhance your browsing experience.</li>
              </ul>
            </section>

            {/* Terms and Conditions */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Terms & Conditions
              </h2>
            </section>

            {/* Terms of Use */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Terms of Use
              </h2>
              <p className="text-gray-600 mb-2">
                Your use of Intelligent CV 247 website and services is subject
                to the following terms of use:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>You may not use our site for any unlawful purpose.</li>
                <li>
                  All content on this site is the property of Intelligent CV 247
                  and may not be reproduced without permission.
                </li>
                <li>
                  You are responsible for maintaining the confidentiality of
                  your account and password.
                </li>
                <li>
                  We may update these terms at any time; continued use of the
                  site constitutes acceptance of any changes.
                </li>
              </ul>
            </section>

            <div className="text-center text-gray-500 text-sm mt-8">
              If you have any questions about our policies, please contact us at{" "}
              <a
                href="mailto:intelligentcv247@gmail.com"
                className="text-emerald-600 hover:underline"
              >
                intelligentcv247@gmail.com
              </a>
              .
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Policy;
