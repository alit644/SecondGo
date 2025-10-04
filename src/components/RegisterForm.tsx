/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { registerInputs } from "@/data";
import { useForm } from "react-hook-form";
import { RegisterSchema, registerSchema } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMsg from "./shared/ErrorMsg";
import SocialButtons from "./shared/SocialButtons";
import { SignUpAction } from "@/actions/auth-action";
import { notify } from "@/utils/notify";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";


const RegisterForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterSchema) => {
    setIsLoading(true);
    try {
      const res = await SignUpAction(data);

      if (res.success) {
        form.reset();
        router.push("/");
        notify(res.message , "success");
      } else {
        notify(res.message , "error");
      }
    } catch (error: any) {
      notify(error?.message ?? "Something went wrong", "error");
    } finally {
      setIsLoading(false);
    }
  };

  //! render Inputs
  const renderInputs = registerInputs.map((input) => (
    <div key={input.id} className="space-y-1.5">
      <Label htmlFor={input.id}>{input.label}</Label>
      <Input
        id={input.id}
        type={input.type}
        placeholder={input.placeholder}
        {...form.register(input.name)}
      />
      <ErrorMsg
        message={form.formState.errors[input.name]?.message?.toString()}
      />
    </div>
  ));

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-full z-10 max-w-md border border-input rounded-md p-6 bg-background shadow-sm"
    >
      <div className="space-y-6">
        <div className="text-center ">
          <h1 className="text-2xl font-semibold tracking-tight">
            Sign Up Account
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Enter your personal data to create your account.
          </p>
        </div>

        {/* Social auth */}
        <SocialButtons />

        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden>
            <span className="w-full border-t border-border/60" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or</span>
          </div>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="eg. John"
                {...form.register("firstName")}
              />
              <ErrorMsg
                message={form.formState.errors.firstName?.message?.toString()}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="eg. Francisco"
                {...form.register("lastName")}
              />
              <ErrorMsg
                message={form.formState.errors.lastName?.message?.toString()}
              />
            </div>
          </div>
          {renderInputs}
          <Button disabled={isLoading} className="w-full h-11" type="submit">
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="underline underline-offset-4">
            Log in
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default RegisterForm;
