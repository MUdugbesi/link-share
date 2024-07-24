"use client"

import Image from "next/image"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { SignupFormSchema } from "@/lib/FormSchema";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";

import Logo from "../../../../public/dev_logo.svg"
import DevLink from "../../../../public/devlinks.svg"
import PasswordIcon from "../../../../public/password-icon.svg"
import EmailIcon from "../../../../public/email-icon.svg"
import Link from "next/link";

import { useAuth } from "@/context/authContext";
import { doSignInWithEmailAndPassword } from "@/firebase/auth";
import { useState } from "react"
import { redirect } from "next/navigation"

const SignupForm = () => {
    const { userLoggedIn } = useAuth()
    const [isRegistering, setIsRegistering] = useState(false);

    const form = useForm<z.infer<typeof SignupFormSchema>>({
        resolver: zodResolver(SignupFormSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    async function onSubmit(values: z.infer<typeof SignupFormSchema>) {
        if (!isRegistering) {
            setIsRegistering(true)
            await doSignInWithEmailAndPassword(values.email, values.password)
        }
    }

    return (
        <>
            {userLoggedIn && (redirect('/'))}
            <div className="flex flex-col w-[476px] h-[709px] mx-auto gap-[51px] justify-between mt-[206px]">

                <div className="flex w-[182.5px] h-[40px] justify-evenly mx-auto">
                    <Image src={Logo} alt="Logo" width={33} height={33} />
                    <Image src={DevLink} alt="Logo" width={135} height={26.25} />
                </div>


                <div className="flex flex-col h-[618px] w-full mx-auto rounded-[12px] bg-bg-primary justify-evenly">
                    <div className="h-[80px] w-[396px] mx-auto gap-[8px] flex flex-col">
                        <h2 className="heading_M">Create Account</h2>
                        <span className="body_M">Let’s get you started sharing your links!</span>
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-[24px] mx-auto w-[396px] h-[418px]">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="body_S">Email Adresss</FormLabel>
                                        <FormControl>
                                            <div className="flex relative">
                                                <Image src={EmailIcon} alt="password" className="absolute top-[20px] left-[18px]" width={13} height={10} />
                                                <Input placeholder="e.g. alex@email.com" className="h-[48px] placeholder:w-[368px] placeholder:h-[24px] pl-[40px]" {...field} />
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
                                        <FormLabel className="body_S">Create password</FormLabel>
                                        <FormControl>
                                            <div className="flex relative">
                                                <Image src={PasswordIcon} alt="password" className="absolute top-[15px] left-[18px]" width={12} height={13.5} />
                                                <Input type="password" placeholder="At least 8 characters" className="h-[48px] placeholder:w-[368px] placeholder:h-[24px] pl-[40px]" {...field} />
                                                <FormMessage className="body_S absolute right-0 mt-[15px] pr-[12px]" />
                                            </div>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="checkPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="body_S">Confirm password</FormLabel>
                                        <FormControl>
                                            <div className="flex relative">
                                                <Image src={PasswordIcon} alt="password" className="absolute top-[15px] left-[18px]" width={12} height={13.5} />
                                                <Input type="password" placeholder="At least 8 characters" className="h-[48px] placeholder:w-[368px] placeholder:h-[24px] pl-[40px]" {...field} />
                                            </div>
                                        </FormControl>
                                        <FormMessage className="body_S pt-[10px]">Password must contain at least 8 characters</FormMessage>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="bg-bg-btn h-[46px] text-[white] heading_S">Login</Button>
                            <span className="body_M text-center">Already have an account? <Link href='/auth/login' className="text-bg-btn">Login</Link></span>
                        </form>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default SignupForm