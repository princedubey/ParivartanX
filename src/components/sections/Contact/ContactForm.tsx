"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export function ContactForm() {
  return (
    <div>
      <h1 className="mb-8 text-4xl font-bold text-indigo-500">
        Request a Project Estimation
      </h1>
      <form className="space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name <span className="text-indigo-500">*</span>
            </label>
            <Input
              id="name"
              className="mt-1 w-full bg-background border-input"
              required
            />
          </div>
          <div>
            <label htmlFor="contact" className="block text-sm font-medium">
              Email or Phone <span className="text-indigo-500">*</span>
            </label>
            <Input
              id="contact"
              className="mt-1 w-full bg-background border-input"
              required
            />
          </div>
          <div>
            <label htmlFor="details" className="block text-sm font-medium">
              Project Details <span className="text-indigo-500">*</span>
            </label>
            <Textarea
              id="details"
              className="mt-1 h-32 w-full bg-background border-input"
              required
            />
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox id="terms" className="mt-1 bg-background border-input" />
          <label htmlFor="terms" className="text-sm text-muted-foreground">
            I agree to the processing of my personal data and accept the terms of{" "}
            <Link href="/privacy" className="text-indigo-500 hover:underline">
              privacy policy
            </Link>
            .
          </label>
        </div>

        <Button
          type="submit"
          className="w-full md:w-auto px-8 py-2 bg-primary rounded-full transition-colors"
        >
          Send Request
        </Button>
      </form>
    </div>
  );
}