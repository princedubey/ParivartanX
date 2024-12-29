"use client";

import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function SocialLinks() {
  return (
    <div>
      <h2 className="mb-6 text-4xl font-bold text-indigo-500">Follow us</h2>
      <div className="flex space-x-4">
        <Link
          href="#"
          className="p-2 rounded-full border border-[#3A3A3A] hover:border-[#FF6B6B] transition-colors"
        >
          <Linkedin className="h-6 w-6" />
        </Link>
        <Link
          href="#"
          className="p-2 rounded-full border border-[#3A3A3A] hover:border-[#FF6B6B] transition-colors"
        >
          <Twitter className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
}