import AmazonLogo from "../assets/images/amazon.webp";
import GoogleLogo from "../assets/images/google.webp";
import SpotifyLogo from "../assets/images/spotify.webp";
import TeslaLogo from "../assets/images/tesla.webp";

export default function LovedInterveiwers() {
  return (
    <section className="max-w-7xl mx-auto p-6">
      <h2 className="text-center text-2xl mb-12 font-bold text-emerald-900 -tracking-tight">
        Loved by Interviewers at
      </h2>
      <div className="grid grid-cols-2 gap-12 items-center justify-center place-items-center sm:grid-cols-4 lg:grid-col-4 ">
        <img src={AmazonLogo} className="w-1/2 sm:w-1/3" alt="Amazon logo" />
        <img src={GoogleLogo} className="w-1/2 sm:w-1/3" alt="Google logo" />
        <img src={SpotifyLogo} className="w-1/2 sm:w-1/3" alt="Spotify logo" />
        <img src={TeslaLogo} className="w-1/2 sm:w-1/3" alt="Tesla logo" />
      </div>
    </section>
  );
}
