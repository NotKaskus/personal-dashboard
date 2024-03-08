import React from "react";

import Header from "@/components/dashboard/layout/header";
import Sidebar from "@/components/dashboard/layout/side-nav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<main className='flex min-h-screen'>
			<div className='flex-1'>
        <Header />
        <Sidebar className='fixed hidden border-r xl:flex' />

        <div className='container mt-24 pb-8 xl:pl-[256px]'>
          {children}
        </div>
			</div>
		</main>
  );
}
