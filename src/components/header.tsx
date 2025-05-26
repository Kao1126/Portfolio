"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export default function Header() {
  const navItems = [
    { name: "About", link: "./" },
    { name: "Resume", link: "/Wei-Cheng-Resume-Design-Engineer.pdf" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // return (
  //   <header className="w-full">
  //     <div className="flex items-center justify-between h-[90px] border-b border-gray-200 responsive-x-padding bg-white">
  //       <a className="cursor-pointer" href="./">
  //         Wei-Cheng Kao
  //       </a>
  //       <ul className="flex space-x-8">
  //         <li>
  //           <a href="./">About</a>
  //         </li>
  //         <li>
  //           <a
  //             href="/Wei-Cheng-Resume-Design-Engineer.pdf"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             Resume
  //           </a>
  //         </li>
  //       </ul>
  //     </div>
  //   </header>
  // );
  return (
    <header className=" w-full fixed">
      <Navbar className="w-full h-[90px]  responsive-x-padding">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo name={"Wei-Cheng Kao"} />
          <a href="./">
            <span className="sr-only">Wei-Cheng Kao</span>
          </a>
          <div className="flex items-center gap-4">
            {navItems.map((item, idx) => (
              <NavbarButton
                key={`nav-link-${idx}`}
                href={item.link}
                className="text-neutral-600 dark:text-neutral-300"
                variant={idx == navItems.length - 1 ? "primary" : "secondary"}
              >
                {item.name}
              </NavbarButton>
            ))}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo name={"Wei-Cheng Kao"} />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            {/* <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div> */}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </header>
  );
}
