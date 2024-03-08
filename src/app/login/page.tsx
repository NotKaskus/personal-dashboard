import Link from "next/link";
import { BsChevronLeft } from "react-icons/bs";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import LoginPage from "@/components/login";

export default function page() {
  return (
    <main className="container flex min-h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <BsChevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-sm">
        <LoginPage />
      </div>
    </main>
  );
}
