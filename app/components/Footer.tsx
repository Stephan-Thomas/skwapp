"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md text-gray-500 p-4 sm:p-6 md:flex md:justify-between md:items-center">
      <div className="container mx-auto flex justify-between items-center z-40">
        <a href="" className="text-2xl font-bold">
          Skwapp
        </a>
        <div className="flex">
          <Link
            href="/"
            className="mx-2 hover:bg-gray-600 hover:text-white hover:rounded-full p-1"
          >
            <Facebook />
          </Link>
          <Link
            href="/explore"
            className="mx-2 hover:bg-gray-600 hover:text-white hover:rounded-full p-1"
          >
            <Instagram />
          </Link>
          <Link
            href="/seller"
            className="mx-2 hover:bg-gray-600 hover:text-white hover:rounded-full p-1"
          >
            <Linkedin />
          </Link>
          <Link
            href="/signin"
            className="mx-2 hover:bg-gray-600 hover:text-white hover:rounded-full p-1"
          >
            <Twitter />
          </Link>
          <p className="hover:bg-gray-600 hover:text-white hover:rounded-full p-1">
            {"\u20A6"} NGN
          </p>
        </div>
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        ></button>
      </div>
    </nav>
  );
};

export default Footer;
