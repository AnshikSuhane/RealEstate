import { Button } from "../ui/button";
import { Home, Heart, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { UserButton, useAuth } from "@clerk/clerk-react";

export function Navbar() {
  const { isSignedIn } = useAuth();

  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="flex h-16 items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link
          to="/"
          className="mr-6 flex items-center space-x-2 text-gray-900 hover:text-gray-700"
        >
          <Home className="h-6 w-6 text-primary" />
          <span className="text-2xl font-bold">EstateEase</span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/properties"
                  className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-200 focus:outline-none font-semibold text-[18px]"
                >
                  Browse
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/add-property"
                  className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-200 focus:outline-none font-semibold text-[18px]"
                >
                  Add Property
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/about"
                  className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-200 focus:outline-none font-semibold text-[18px]"
                >
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/contact"
                  className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-200 focus:outline-none font-semibold text-[18px]"
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center space-x-4">
          <Link to="/favorites">
            <Button variant="ghost" size="icon" className="hover:bg-gray-100">
              <Heart className="h-7 w-7 text-gray-600" />
            </Button>
          </Link>
          <Link to="/call">
            <Button variant="ghost" size="icon" className="hover:bg-gray-100">
              <Phone className="h-5 w-5 text-gray-600" />
            </Button>
          </Link>

          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Link to="/login">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>

      <div className="md:hidden flex justify-center pb-4">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/properties"
                  className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-200 focus:outline-none font-semibold text-[18px]"
                >
                  Browse
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/add-property"
                  className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-200 focus:outline-none font-semibold text-[18px]"
                >
                  Add Property
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/about"
                  className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-200 focus:outline-none font-semibold text-[18px]"
                >
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/contact"
                  className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm text-gray-700 transition-all hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-200 focus:outline-none font-semibold text-[18px]"
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}