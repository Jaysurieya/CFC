// 1. Import React and the necessary components from your file
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
} from "./resizable-navbar"; // 👈 Adjust the path to your file

// This is a demo component showing how to use the Navbar
function NavbarDemo() {
  // 2. Define the navigation links
  const navItems = [
    { name: "Features", link: "/features" },
    { name: "Pricing", link: "/pricing" },
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  // 3. Manage state for the mobile menu (open/closed)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* 4. Assemble the components */}
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <NavbarButton>Get Started</NavbarButton>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </MobileNavHeader>
          <MobileNavMenu isOpen={isOpen}>
            {/* Render mobile menu items */}
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