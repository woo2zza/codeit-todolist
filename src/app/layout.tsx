"use client";
import React from "react";
import "./globals.css";

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
            <img
              src="/Image/Size=Small.svg"
              alt="Mobile Logo"
              className="mobile-logo h-18 "
            />
            <img
              src="/Image/Size=Large.svg"
              alt="Desktop/Tablet Logo"
              className="desktop-logo h-18 "
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
