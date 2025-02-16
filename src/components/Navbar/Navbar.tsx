import SectionPadding from "@/layouts/SectionPadding";
import React from "react";
import Logo from "../Logo";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const navs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
];

const Navbar: React.FC = () => {
  return (
    <SectionPadding className="sticky top-0 py-3 z-[999] px-10">
      <div className="border rounded-2xl px-6 py-3 flex justify-between items-center shadow-md bg-background/50 backdrop-blur-2xl  ">
        <Logo />
        <ul className="flex gap-10 items-center">
          {navs.map((nav, index) => (
            <li key={index}>
              <a
                href={nav.link}
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
        <Link to="/auth/login">
          <Button className="rounded-full cursor-pointer px-6">Login</Button>
        </Link>
      </div>
    </SectionPadding>
  );
};

export default Navbar;
