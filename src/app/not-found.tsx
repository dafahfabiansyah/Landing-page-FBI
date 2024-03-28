"use client";
import React from "react";
import { ListMagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center transition-all items-center">
      <div className="flex justify-center items-center gap-4 flex-col ">
        <ListMagnifyingGlass size={32} className="text-green-500" />
        <h3 className="text-green-500 text-2xl font-bold">404 | NOT FOUND</h3>
        <h4 className="text-black text-lg font-bold">
          You've gone too far, back to the home page.
        </h4>
        <Link href="/" className="hover:text-green-500 text-black">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default Page;
