"use client";

import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginFormSchema } from "@/lib/FormSchema";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { doSignInWithEmailAndPassword } from "@/firebase/auth";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const LoginForm = () => {
    const [isSigningIn, setIsSigningIn] = useState(false);
    const router = useRouter();

    const form = useForm<z.infer<typeof LoginFormSchema>>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });

    async function onSubmit(values: z.infer<typeof LoginFormSchema>) {
        if (!isSigningIn) {
            setIsSigningIn(true);
            await doSignInWithEmailAndPassword(values.email, values.password);
            toast.success('Login in successful')
            router.push('/home')

        } else {
            toast.error("Login failed. Please try again.")
        }
    }

    return (
        <div className="flex flex-col w-[311px] max-sm:mb-[80px] md:w-[476px] md:h-[573px] mx-auto gap-[51px] justify-between mt-[103px] md:mt-[206px]">
            <div className="flex w-[182.5px] h-[40px] justify-evenly mx-auto">
                <Image src='/dev_logo.svg' alt="Logo" width={33} height={33} />
                <Image src='/devlinks.svg' alt="Logo" width={135} height={26.25} />
            </div>
            <div className="flex flex-col h-[482px] w-full mx-auto rounded-[12px] bg-bg-primary justify-evenly">
                <div className="h-[80px] md:w-[396px] mx-auto gap-[8px] flex flex-col">
                    <h2 className="md:heading_M heading_M_">Login</h2>
                    <span className="body_M">Add your details below to get back into the app</span>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-[24px] mx-auto md:w-[396px] md:h-[282px] h-auto ">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="body_S">Email Adresss</FormLabel>
                                    <FormControl>
                                        <div className="flex relative">
                                            <Image src='/email-icon.svg' alt="email" className="absolute top-[20px] left-[18px]" width={13} height={10} />
                                            <Input placeholder="e.g. alex@email.com" className="max-sm:w-[311px] h-[48px] placeholder:md:w-[368px] placeholder:h-[24px] pl-[40px]" {...field} />
                                            <FormMessage className="body_S absolute right-0 mt-[15px] pr-[12px]" />
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="body_S">Password</FormLabel>
                                    <FormControl>
                                        <div className="flex relative">
                                            <Image src='password-icon.svg' alt="password" className="absolute top-[15px] left-[18px]" width={12} height={13.5} />
                                            <Input type="password" placeholder="Enter your password" className="h-[48px] placeholder:w-[368px] placeholder:h-[24px] pl-[40px]" {...field} />
                                            <FormMessage className="body_S absolute right-0 mt-[15px] pr-[12px]" />
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="bg-bg-btn h-[46px] text-[white] heading_S">Login</Button>
                        <span className="body_M text-center mx-auto max-sm:w-[70%]">Don`t have an account? <Link href='/auth/signup' className="text-bg-btn">Create account</Link></span>
                    </form>
                </Form>
            </div>
        </div>
    );
}

export default LoginForm;
