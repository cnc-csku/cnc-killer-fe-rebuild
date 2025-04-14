"use client"
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";

import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { Button } from "@heroui/button"



import Image from "next/image";
import Logo from "@/public/images/logo-killer.png"
export const Navbar = () => {

  return (
    <HeroUINavbar maxWidth="full" position="static" className="mt-6">
      <NavbarContent justify="start">
        <NavbarItem>
          <Image priority={true} width={160} alt="cnc-killer-logo" src={Logo}></Image>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Popover color="foreground" className="dark"  showArrow offset={20} placement="bottom">
            <PopoverTrigger>
            <Button className="bg-white text-red-600 shadow-sm shadow-white text-lg">YOUR ID</Button>
            </PopoverTrigger>
            <PopoverContent className="text-lg p-3"> 
              👀
            </PopoverContent>
          </Popover>
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
