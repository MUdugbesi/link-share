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
import Logo from "../../../../public/dev_logo.svg";
import DevLink from "../../../../public/devlinks.svg";
import PasswordIcon from "../../../../public/password-icon.svg";
import EmailIcon from "../../../../public/email-icon.svg";
import Link from "next/link";
import { doSignInWithEmailAndPassword } from "@/firebase/auth";
import { useAuth } from "@/context/authContext";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
    const { userLoggedIn } = useAuth();
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
            try {
                await doSignInWithEmailAndPassword(values.email, values.password);
                toast.success('Login successful');
                router.push('/home');
            } catch (error) {
                toast.error("Login failed. Please try again.");
            } finally {
                setIsSigningIn(false);
            }
        }
    }

    

    return (
        <div className="flex flex-col w-full max-w-md h-auto mx-auto gap-8 justify-between mt-16 p-4">
            <div className="flex w-full justify-center">
                <Image src={Logo} alt="Logo" width={33} height={33} />
                <Image src={DevLink} alt="Logo" width={135} height={26.25} />
            </div>
            <div className="flex flex-col w-full bg-bg-primary rounded-lg p-6 gap-8">
                <div className="flex flex-col items-center gap-2">
                    <h2 className="text-2xl font-semibold">Login</h2>
                    <span className="text-base text-gray-500">Add your details below to get back into the app</span>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm">Email Address</FormLabel>
                                    <FormControl>
                                        <div className="flex relative">
                                            <Image src={EmailIcon} alt="email" className="absolute top-1/2 transform -translate-y-1/2 left-4" width={13} height={10} />
                                            <Input placeholder="e.g. alex@email.com" className="h-12 pl-10" {...field} />
                                            <FormMessage className="text-sm absolute right-0 mt-2 pr-3" />
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
                                    <FormLabel className="text-sm">Password</FormLabel>
                                    <FormControl>
                                        <div className="flex relative">
                                            <Image src={PasswordIcon} alt="password" className="absolute top-1/2 transform -translate-y-1/2 left-4" width={12} height={13.5} />
                                            <Input type="password" placeholder="Enter your password" className="h-12 pl-10" {...field} />
                                            <FormMessage className="text-sm absolute right-0 mt-2 pr-3" />
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="bg-bg-btn h-12 text-white text-lg">Login</Button>
                        <span className="text-center text-sm">Don’t have an account? <Link href='/auth/signup' className="text-bg-btn">Create account</Link></span>
                    </form>
                </Form>
            </div>
        </div>
    );
}

export default LoginForm;
