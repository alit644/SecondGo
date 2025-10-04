"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { navLinks } from "../../data";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  const renderLinks = navLinks.map((link) => (
    <NavigationMenuItem key={link.label}>
      <NavigationMenuLink
        href={link.href}
        className={`${navigationMenuTriggerStyle()} ${pathname === link.href ? "bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent " : ""}`}
      >
        {link.label}
      </NavigationMenuLink>
    </NavigationMenuItem>
  ));
  return (
    <div className="hidden md:block">
      <NavigationMenu>
        <NavigationMenuList>{renderLinks}</NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Nav;
