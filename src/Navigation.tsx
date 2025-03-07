import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Navigation() {
  return (
    <NavigationMenu className="w-full max-w-screen-xl mx-auto px-4 md:px-8">
      <NavigationMenuList className="flex flex-col md:flex-row justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4">
        <NavigationMenuItem>
          <Link
            to="/"
            className={cn(
              navigationMenuTriggerStyle(),
              "text-white bg-black text-sm md:text-base w-full md:w-auto hover:bg-gray-800 transition-colors"
            )}
          >
            Home
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            to="/#Resume"
            className={cn(
              navigationMenuTriggerStyle(),
              "text-white bg-black text-sm md:text-base w-full md:w-auto hover:bg-gray-800 transition-colors"
            )}
          >
            Resume
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            to="/#Skills"
            className={cn(
              navigationMenuTriggerStyle(),
              "text-white bg-black text-sm md:text-base w-full md:w-auto hover:bg-gray-800 transition-colors"
            )}
          >
            Skills
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            to="/Contact"
            className={cn(
              navigationMenuTriggerStyle(),
              "text-white bg-black text-sm md:text-base w-full md:w-auto hover:bg-gray-800 transition-colors"
            )}
          >
            Contact
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
