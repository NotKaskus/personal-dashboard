"use client";

import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import CommandMenu from "@/components/dashboard/layout/command-menu";
import MobileSideNav from "@/components/dashboard/layout/mobile-side-nav";
import UserMenu from "./user-menu";
import SwitchMode from "./switch-mode";
import Setting from "./settings";


export default function Header({ children }: { children?: React.ReactNode }) {
  const navRef = useRef(null);
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        setScroll(!entries[0].isIntersecting);
      },
      {
        root: null,
        rootMargin: `10px 0px`,
        threshold: 0,
      }
    );

    intersectionObserver.observe(navRef.current!);

    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <>
      <div ref={navRef}></div>
      <div
        className={cn(
          "fixed right-0 top-0 z-50 flex h-16 w-full items-center justify-between border-b bg-background px-6 xl:w-[calc(100%-240px)]"
        )}
      >
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="-ml-3 xl:hidden"
            size="icon"
            onClick={() => setOpen(true)}
          >	
						<Menu size={24} />
					</Button>

          <CommandMenu />
        </div>

        <div className='flex items-center gap-4'>
          <SwitchMode />
          <Setting/>
					<UserMenu
            user={{
              name: 'ShadCN',
              image: 'https://github.com/shadcn.png',
              email: 'paulandrew103@proton.me'
            }}
          />
				</div>
      </div>

      <MobileSideNav open={open} onOpenChange={setOpen} />
    </>
  );
}
