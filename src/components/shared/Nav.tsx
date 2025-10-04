import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { navLinks } from "../../data";

const Nav = () => {
  const renderLinks = navLinks.map((link) => (
    <NavigationMenuItem key={link.label}>
      <NavigationMenuLink
        href={link.href}
        className={navigationMenuTriggerStyle()}
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
