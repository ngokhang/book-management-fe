"use client";

import { RegisterSchema } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ButtonSubmit from "./ButtonSubmit";
import TextInput from "./TextInput";

interface IRegisterFormProps {}

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
    reValidateMode: "onSubmit",
    mode: "onBlur",
  });

  return (
    <form
      onSubmit={handleSubmit((d) => console.log(d))}
      className="flex flex-col"
    >
      <TextInput
        label="First name"
        inputId="firstName"
        register={register}
        errors={errors}
        key={"register-form-firstName-inp"}
        required={true}
      />
      <TextInput
        label="Last name"
        inputId="lastName"
        register={register}
        errors={errors}
        key={"register-form-lastName-inp"}
        required={true}
      />
      <TextInput
        label="Email"
        inputId="email"
        register={register}
        errors={errors}
        key={"register-form-email-inp"}
        required={true}
        type="email"
      />
      <TextInput
        label="Password"
        inputId="password"
        register={register}
        errors={errors}
        key={"register-form-password-inp"}
        required={true}
        type="password"
      />
      <TextInput
        label="Confirm password"
        inputId="confirmPassword"
        register={register}
        errors={errors}
        key={"register-form-confirmPassword-inp"}
        required={true}
        type="password"
      />
      <ButtonSubmit text="Register" width={"14.5rem"} disabled={false} />
    </form>
  );
}
