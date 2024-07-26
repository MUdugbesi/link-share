"use client"

import { z } from "zod";


export const LoginFormSchema = z.object({
    email: z.string().email({ message: "Can't be empty" }),
    password: z.string().min(5, { message: "Please check again" })
})

export const SignupFormSchema = z.object({
    email: z.string().email({ message: "Can't be empty" }),
    password: z.string().min(5, { message: "Please check again" }),
    checkPassword: z.string().min(8, "Password must contain at least 8 characters")
}).refine((data) => data.password === data.checkPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});