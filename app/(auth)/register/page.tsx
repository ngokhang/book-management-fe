import BannerIntroduction from "../components/BannerIntroduction";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="w-[800px] px-4 flex rounded-md">
      <div className="hidden md:block w-1/2 bg-[#228BE6] p-4 rounded-s">
        <BannerIntroduction />
      </div>
      <div className="w-full md:w-1/2 bg-white p-4 rounded-e">
        <RegisterForm />
      </div>
    </div>
  );
}
