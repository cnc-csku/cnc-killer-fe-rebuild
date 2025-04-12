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
    <HeroUINavbar maxWidth="xl" position="static" className="mt-5">
      <NavbarContent justify="start">
        <NavbarItem>
          <Image width={160} alt="cnc-killer-logo" src={Logo}></Image>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Popover color="foreground"  showArrow offset={20} placement="bottom">
            <PopoverTrigger>
              <Button className="bg-red-600">YOUR ID</Button>
            </PopoverTrigger>
            <PopoverContent>
              👀
            </PopoverContent>
          </Popover>
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
