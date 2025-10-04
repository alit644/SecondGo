import { RegisterInput } from "@/utils/types";
import { ShieldCheck, Zap, Truck, Headphones, UserPlus, BadgeCheck, Upload, TrendingUp } from "lucide-react";

export const registerInputs : RegisterInput[] = [
 
 {
  id: "email",
  label: "Email",
  name: "email",
  type: "email",
  placeholder: "eg. johnfrans@gmail.com",
 },
 {
  id: "password",
  label: "Password",
  name: "password",
  type: "password",
  placeholder: "Enter your password",
 }
]
export const sellerSteps = [
  {
    icon: UserPlus,
    title: "Create your account",
    desc: "Sign up with your email to get started as a seller.",
  },
  {
    icon: BadgeCheck,
    title: "Verify your profile",
    desc: "Add basic details and verify identity for trust & safety.",
  },
  {
    icon: Upload,
    title: "List your product",
    desc: "Upload images, set pricing, and publish your first listing.",
  },
  {
    icon: TrendingUp,
    title: "Start selling",
    desc: "Share your store link, get orders, and track performance.",
  },
];
export const navLinks = [
 {
  href: "/",
  label: "Home",
 },
 {
  href: "/explore",
  label: "Explore",
 },
 {
  href: "/categories",
  label: "Categories",
 }
]
export const benefits = [
 {
   icon: ShieldCheck,
   title: "Secure & Trusted",
   desc: "Protected payments and verified sellers for peace of mind.",
   gradient: "from-indigo-500/20 to-fuchsia-500/20",
 },
 {
   icon: Zap,
   title: "Fast Checkout",
   desc: "Optimized flows with instant confirmations and receipts.",
   gradient: "from-amber-500/20 to-rose-500/20",
 },
 {
   icon: Truck,
   title: "Quick Delivery",
   desc: "Reliable shipping options with real‑time tracking.",
   gradient: "from-emerald-500/20 to-cyan-500/20",
 },
 {
   icon: Headphones,
   title: "24/7 Support",
   desc: "Friendly experts to help you anytime you need.",
   gradient: "from-sky-500/20 to-violet-500/20",
 },
];