import { REGEX_HUMAN_NAME, REGEX_PASSWORD } from "@/constants/regex";
import {
  FIRST_NAME_LENGTH,
  LAST_NAME_LENGTH,
  NAME_INVALID,
  PASSWORD_HAVE_SPACE,
} from "@/constants/validator.message";
import z from "zod";

export const RegisterSchema = z
  .object({
    firstName: z.string().min(2),
    lastName: z
      .string()
      .regex(REGEX_HUMAN_NAME, { message: NAME_INVALID })
      .min(2, { message: LAST_NAME_LENGTH }),
    email: z.string().email(),
    password: z
      .string()
      .min(6)
      .regex(REGEX_PASSWORD, { message: PASSWORD_HAVE_SPACE }),
    confirmPassword: z
      .string()
      .min(6)
      .regex(REGEX_PASSWORD, { message: PASSWORD_HAVE_SPACE }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The confirm password did not match",
        path: ["confirmPassword"],
      });
    }
  });

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6)
    .regex(REGEX_PASSWORD, { message: PASSWORD_HAVE_SPACE }),
});
