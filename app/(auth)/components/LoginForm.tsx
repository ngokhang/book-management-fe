"use client";

import TextInput from "./TextInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas/auth.schema";
import ButtonSubmit from "./ButtonSubmit";
import Link from "next/link";
import Divider from "./Divider";
import LinkAuthNavigation from "./LinkAuthNavigation";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

interface ILoginFormProps {}

const LoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
    reValidateMode: "onSubmit",
    mode: "onBlur",
  });

  return (
    <form className="w-full sm:w-[24rem] flex flex-col px-4 py-8 justify-center bg-white rounded shadow">
      <div className="text-black text-2xl font-bold text-center my-4">
        <span>Login</span>
      </div>
      <TextInput
        inputId="email"
        label="Email"
        required={true}
        register={register}
        errors={errors}
        type="email"
      />
      <TextInput
        inputId="password"
        label="Password"
        required={true}
        register={register}
        errors={errors}
        type="password"
      />
      <ButtonSubmit text="Login" width="100%" disabled={false} />
      <Divider text="Or" />
      <div className="flex flex-col gap-2">
        <LinkAuthNavigation
          hrefTo="/register"
          text="Register new account"
          icon={<FaUserAlt />}
        />
        <LinkAuthNavigation
          hrefTo="/test"
          text="Log in with Google"
          icon={<FaGoogle />}
        />
        <LinkAuthNavigation
          hrefTo="/test"
          text="Log in with Facebook"
          icon={<FaFacebook />}
        />
      </div>
    </form>
  );
};

export default LoginForm;
