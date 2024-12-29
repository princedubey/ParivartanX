"use client";

import Link from "next/link";
import { SocialLinks } from "./social-links";

export function ContactInfo() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="mb-4 text-4xl font-bold text-indigo-500">Contact Info</h2>
        <p className="mb-6 text-muted-foreground">
          Need help? Feel free to contact us and we&apos;ll respond as soon as possible.
        </p>
        <div className="space-y-4">
          <p className="text-lg">sales@parivartanXdevelopment.com</p>
          <p className="text-2xl font-semibold">+91 305 767 2434</p>
        </div>
      </div>

      <SocialLinks />

      <div className="text-sm text-muted-foreground">
        <p>
          This site is protected by reCAPTCHA and the Google{" "}
          <Link href="#" className="text-muted-foreground hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-muted-foreground hover:underline">
            Terms of Service
          </Link>{" "}
          apply.
        </p>
      </div>
    </div>
  );
}