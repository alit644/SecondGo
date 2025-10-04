/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { UserRound } from "lucide-react";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";
import Nav from "./Nav";
import SearchQuery from "./SearchQuery";
import { useSession } from "next-auth/react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Header = () => {
  const { data: session, status } = useSession();
  // get pathname
  const pathname = usePathname();
  return (
    <section className=" flex z-50 items-center bg-background justify-between shadow-md  border-b border-input px-4 h-16 ">
      {/* logo */}
      <Logo />
      {/* search */}
      <SearchQuery />
      {/* nav */}
      <Nav />
      {/* Icon */}
      <div className="flex items-center gap-2">
        {session ? (
          status === "authenticated" ? (
            <Button variant={"outline"} size={"icon"}>
              <Link href="/profile">
                <UserRound />
              </Link>
            </Button>
          ) : null
        ) : status === "loading" ? null : pathname === "/login" ? null : (
          <Button variant={"outline"} aria-label="login" title="login">
            <Link href="/login">Login</Link>
          </Button>
        )}

        <ModeToggle />
      </div>
    </section>
  );
};

export default Header;
