"use client";
import React, { useState } from "react";
import { OctagonAlertIcon } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const signUpSchema = z.object({
  name:z.string().min(1,"name is required"),
  email: z.string().email(),
  password: z.string().min(1, "Password is required"),
  confirmPassword:z.string().min(1, "confirmPassword is required")
}).refine(data=>data.password ==data.confirmPassword,{
  message:"password dont match",
  path:["confirmPassword"]
});

type SignUpFormData = z.infer<typeof signUpSchema>;

export default function SignUpView() {
  const router = useRouter()
  const [showError, setShowError] = useState<string|null>("");
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name:"",
      email: "",
      password: "",
      confirmPassword:""
    },
  });

  const onSubmit =  (data:SignUpFormData) => {
    setIsLoading(true)
     authClient.signUp.email({
      name:data.name,
      email:data.email, 
      password:data.password, 

  }, {

      onSuccess: (ctx) => {
        setIsLoading(false)
          router.push("/")
      },
      onError: (ctx) => {
        setIsLoading(false)
        setShowError(ctx.error.message);
      },
});
  };
  const handleSocialLogin = (provider: "github" | "google") => {
    setIsLoading(true)
    authClient.signIn.social({
     provider:provider,

 }, {

     onSuccess: (ctx) => {
       setIsLoading(false)
         router.push("/")
     },
     onError: (ctx) => {
       setIsLoading(false)
       setShowError(ctx.error.message);
     },
});
  };
  return (
    <>
      <div className="flex flex-col gap-6  ">
        <Card className="overflow-hidden p-0 border-none bg-white">
          <CardContent className="grid p-0 md:grid-cols-2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="p-6 md:p-8"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-2xl font-bold">Let&apos;s get Started</h1>
                    <p className="text-[var(--muted-foreground)] text-balance">
                      Create Your Account
                    </p>
                  </div>
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Farzeel"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="example@gmail.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="••••••••"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>confirm Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="••••••••"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                  {!!showError && (
                    <Alert className="bg-[var(--destructive)]/10 border-none">
                      <OctagonAlertIcon className="4-4 w-4 !text-[var(--destructive)]" />
                      <AlertTitle>{showError}</AlertTitle>
                    </Alert>
                  )}
                  <Button
                  disabled={isLoading}
                    type="submit"
                    className={`w-full bg-black text-white cursor-pointer hover:bg-gray-700 `}
                  >
                    {!isLoading ?"Sign UP": "Sigining UP...."}
                  </Button>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => handleSocialLogin("google")}
                      className="cursor-pointer w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                    >
                      <FcGoogle className="w-5 h-5 mr-2"></FcGoogle>
                      Google
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSocialLogin("github")}
                      className="cursor-pointer w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                    >
                      <FaGithub className="w-5 h-5 mr-2"></FaGithub>
                      GitHub
                    </button>
                  </div>
                  <div className="text-center">
                  <span className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link
                      href={"/sign-in"}
                      className="font-medium text-gray-900 hover:text-gray-700 underline focus:outline-none focus:ring-2 focus:ring-green-500 rounded px-1"
                      
                    >
                      Sign In
                    </Link>
                  </span>
                </div>
                </div>
              </form>
            </Form>
            <div className="bg-radial from-green-700 to-green-900 relative hidden md:flex flex-col items-center gap-y-4 justify-center">
              <img className="h-[92px] w-[92px]" src="./logo.svg" alt="" />

              <div className="flex flex-col items-center jusitify-center">
                <p className="text-2xl font-semibold text-white">Meet.AI</p>
                <p className="text-green-100 text-lg opacity-90">
                  Your AI-powered meeting assistant
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-xs text-gray-500 mt-6">
          By clicking continue, you agree to our{" "}
          <a
            href="#"
            className="underline hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 rounded px-1"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="underline hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 rounded px-1"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </>
  );
}
