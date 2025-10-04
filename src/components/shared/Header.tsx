import { UserRound } from "lucide-react";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";
import Nav from "./Nav";
import SearchQuery from "./SearchQuery";
import { Button } from "../ui/button";
import { auth } from "@/auth";
import Link from "next/link";

const Header = async () => {
  const session = await auth();
  return (
    <section className="flex z-50 items-center justify-between shadow-md  border-b border-input px-4 h-16 ">
      {/* logo */}
      <Logo />
      {/* search */}
      <SearchQuery />
      {/* nav */}
      <Nav />
      {/* Icon */}
      <div className="flex items-center gap-2">
        {session ? (
          <Button variant={"outline"} size={"icon"}>
           <Link href="/profile">
            <UserRound />
           </Link>
          </Button>
        ) : (
          <Button variant={"outline"}>
           <Link href="/login">Login</Link>
          </Button>
        )}

        <ModeToggle />
      </div>
    </section>
  );
};

export default Header;

