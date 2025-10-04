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
import { LoginSchema, loginSchema } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMsg from "./shared/ErrorMsg";
import SocialButtons from "./shared/SocialButtons";
import { signInAction } from "@/actions/auth-action";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { notify } from "@/utils/notify";

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    setLoading(true);
    try {
      const res = await signInAction(data);
      if (res.success) {
        form.reset();
        router.push("/");
        notify(res.message, "success");
      } else {
        notify(res.message, "error");
      }
    } catch (error: any) {
      notify(error?.message || "Something went wrong", "error");
    } finally {
      setLoading(false);
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
      className="w-full max-w-md z-10 border  border-input rounded-md p-6 bg-background shadow-sm"
    >
      <div className="space-y-6">
        <div className="text-center ">
          <h1 className="text-2xl font-semibold tracking-tight">
            Sign In Account
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
          {renderInputs}
          <Button className="w-full h-11" type="submit" disabled={loading}>
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" />  : "Sign In"}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="underline underline-offset-4">
            Register
          </Link>
        </p>
      </div>
      {error && <ErrorMsg message={error} />}
    </motion.div>
  );
};

export default LoginForm;
