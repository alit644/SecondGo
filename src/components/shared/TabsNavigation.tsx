"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, CreditCard, ShoppingBag, Settings } from "lucide-react";
import { motion } from "framer-motion";

const TabsNavigation = () => {
  const pathname = usePathname();
 
   const tabs = [
     { label: "Overview", icon: User, href: "/profile" },
     { label: "Account", icon: CreditCard, href: "/profile/account" },
     { label: "Activity", icon: ShoppingBag, href: "/profile/orders" },
     { label: "Settings", icon: Settings, href: "/profile/settings" },
   ];
 return (
 <div className="my-4 overflow-x-auto scrollbar-hide bg-card shadow-md p-1 flex gap-2 rounded-lg relative">
        {tabs.map((tab, index) => {
          const isActive = pathname === tab.href;
          const Icon = tab.icon;

          return (
            <Link
              key={index}
              prefetch={true}
              href={tab.href}
              className="flex-1 relative flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium whitespace-nowrap text-muted-foreground hover:text-primary transition text-center"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 dark:bg-primary/5 bg-background  border border-primary/30 rounded-md text-white "
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
              <Icon className="w-4 h-4 relative z-10" />
              <span className="relative z-10">{tab.label}</span>
            </Link>
          );
        })}
      </div>
 );
}

export default TabsNavigation;
