
import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./resizable-navbar"; 

function NavbarDemo() {
  const navItems = [
    { name: "Features", link: "/features" },
    { name: "Pricing", link: "/pricing" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <NavbarButton>Get Started</NavbarButton>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </MobileNavHeader>
          <MobileNavMenu isOpen={isOpen}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                className="block rounded-md px-4 py-2 text-lg font-semibold text-black hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800"
              >
                {item.name}
              </a>
            ))}
            <NavbarButton href="/signup" className="mt-4 w-full">
              Sign Up
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default NavbarDemo;