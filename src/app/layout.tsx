"use client";
import React from "react";
import "./globals.css";
import Image from "next/image";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const handleLogoClick = () => {
    window.location.href = "/";
  };
  return (
    <html lang="en">
      <body>
        <header>
          <div onClick={handleLogoClick}>
            <Image
              src="/Image/Size=Small.svg"
              alt="Mobile Logo"
              className="mobile-logo h-18"
              width={72}
              height={72}
            />
            <Image
              src="/Image/Size=Large.svg"
              alt="Desktop/Tablet Logo"
              className="desktop-logo h-18"
              width={144}
              height={144}
            />
          </div>
        </header>

        <main>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
};

export default Layout;
