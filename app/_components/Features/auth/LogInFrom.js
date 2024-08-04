// src/app/components/LogInForm.js

"use client";
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import InputField from "../../UI/InputField";
import Button from "../../UI/Button";
import LogoImg from "@/public/logo.png";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import SpinnerMini from "../../UI/SpinnerMini";
import toast from "react-hot-toast";

const LogInForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    setLoading(false);

    if (result.error === "CredentialsSignin") {
      toast.error("Invalid email or password");
    } else {
      // Successful login

      router.push("/");
      toast.success("Login Successful");
    }
  };

  return (
    <div className="w-full">
      <div className="mb-4 flex items-start justify-start">
        <Image src={LogoImg} alt="Logo" className="h-24 w-24" />
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Login</h2>
        <p className="text-lg text-gray-700 sm:text-2xl">
          Enter your credentials here
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <InputField
          label="Email"
          type="email"
          name="email"
          register={register}
          errors={errors}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          register={register}
          errors={errors}
        />
        <div className="flex items-center justify-between">
          <a href="#" className="text-sm text-primary-600 hover:underline">
            Forgot password?
          </a>
        </div>
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <SpinnerMini /> <p>Logining...</p>
            </div>
          ) : (
            "Login"
          )}
        </Button>
      </form>
      {loading && (
        <div className="mt-4 flex justify-center">
          <div className="loader"></div>
        </div>
      )}
      <p className="mt-6 text-start text-xl text-gray-600">
        &copy; {new Date().getFullYear()} Saity
      </p>
    </div>
  );
};

export default LogInForm;
