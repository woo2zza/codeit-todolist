import React from "react";
import "./globals.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header className="">
          <img
            src="/Image/Size=Small.svg"
            alt="Mobile Logo"
            className="mobile-logo h-8 w-auto"
          />
          <img
            src="/Image/Size=Large.svg"
            alt="Desktop/Tablet Logo"
            className="desktop-logo h-8 w-auto"
          />
        </header>

        <main className="flex-grow flex justify-center items-center px-4">
          <div className="max-w-5xl w-full">{children}</div>
        </main>
      </body>
    </html>
  );
};

export default Layout;
