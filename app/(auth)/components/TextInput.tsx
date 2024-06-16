"use client";

import { ErrorMessage } from "@hookform/error-message";
import * as React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface ITextInputProps {
  register: UseFormRegister<FieldValues>;
  label: string;
  inputId: string;
  errors?: FieldErrors<FieldValues> | undefined;
  type?: string | undefined;
  required: boolean;
}

const TextInput: React.FunctionComponent<ITextInputProps> = ({
  label,
  inputId,
  register,
  errors,
  type,
  required,
}) => {
  return (
    <div className="flex flex-col gap-1 h-[90px]">
      <label htmlFor={`${inputId}`} className="text-sm">
        {label}
        {required && <span className="text-red-600 ms-1">*</span>}
      </label>
      <input
        className="border border-[#202b31] rounded outline-none px-2 py-1 text-base focus:border-[#93e7fa]"
        type={`${type || "text"}`}
        id={`${inputId}`}
        {...register(`...${inputId}`)}
      />
      <ErrorMessage
        errors={errors}
        name={`${inputId}`}
        render={({ message }) => (
          <span className="inline text-red-600 text-xs">{message}</span>
        )}
      />
    </div>
  );
};

export default TextInput;
