"use client"
import React from 'react';
import { Button } from '../ui/button';
type Providers = "google" | "github";
import { signIn } from "next-auth/react";

const SocialButtons = () => {
 const signInWithProvider = (provider: Providers) => {
  signIn(provider, { redirectTo: "/" });
 }
 return (
  <div className="grid grid-cols-2 gap-3">
  <Button onClick={() => signInWithProvider("google")} variant="secondary" className="h-10 justify-center gap-2">
    <svg
      width="18"
      height="18"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
    >
      <path
        d="M44 24c0-1.59-.14-3.12-.41-4.59H24v8.68h11.2c-.48 2.6-1.96 4.8-4.16 6.28v5.2h6.74C41.86 36.67 44 30.78 44 24Z"
        fill="#4285F4"
      />
      <path
        d="M24 44c5.4 0 9.94-1.79 13.25-4.83l-6.74-5.2c-1.86 1.25-4.24 1.99-6.51 1.99-5 0-9.24-3.37-10.75-7.9H6.31v5.32C9.6 39.73 16.2 44 24 44Z"
        fill="#34A853"
      />
      <path
        d="M13.25 28.06A12.02 12.02 0 0 1 12.6 24c0-1.41.25-2.77.65-4.06v-5.32H6.31A20 20 0 0 0 4 24c0 3.24.77 6.3 2.31 9.06l6.94-5Z"
        fill="#FBBC05"
      />
      <path
        d="M24 12.02c2.93 0 5.56 1 7.63 2.94l5.71-5.71C33.93 5.82 29.4 4 24 4 16.2 4 9.6 8.27 6.31 14.94l6.94 5c1.51-4.53 5.75-7.9 10.75-7.9Z"
        fill="#EA4335"
      />
    </svg>
    Google
  </Button>
  <Button onClick={() => signInWithProvider("github")} variant="secondary" className="h-10 justify-center gap-2">
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.19-3.37-1.19-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61 1 .07 1.52 1.04 1.52 1.04.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 7.07c.85 0 1.71.11 2.51.33 1.9-1.3 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.91.68 1.85 0 1.33-.01 2.4-.01 2.72 0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
    Github
  </Button>
</div>
 );
}

export default SocialButtons;
