import Image from "next/image";
import LoginImg from "../../public/image/LoginImage.png";
import LogInFrom from "../_components/Features/auth/LogInFrom";
import { login } from "../services/authService";

export const metadata = {
  title: "Login",
};
export default function LoginForm() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-stroke p-4 md:p-10">
      <div className="grid min-h-[80vh] w-full grid-cols-1 overflow-hidden rounded-lg bg-white shadow-md md:w-10/12 lg:grid-cols-2">
        <div className="col-span-1 flex items-center bg-white p-8 md:p-10">
          <LogInFrom />
        </div>

        <div className="relative col-span-1 hidden rounded-3xl bg-primary-600 p-6 lg:flex">
          <div className="flex w-full flex-col items-center justify-between rounded-2xl bg-primary-400 p-10">
            <h1 className="text-center text-4xl text-white">
              Welcome Admin Please Log In
            </h1>
            <div className="w-8/12 md:w-5/12">
              <Image
                src={LoginImg}
                alt="Login"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
