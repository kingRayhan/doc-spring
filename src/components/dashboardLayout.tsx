"use client";

import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "API Keys", href: "/dashboard/api-keys" },
];

export interface IUser {
  authUser?: KindeUser<Record<string, string>>;
}

const DashboardLayout: React.FC<PropsWithChildren<IUser>> = ({ children }) => {
  const pathname = usePathname();

  const handleLogout = async () => {
    window.location.href = "/api/auth/logout";
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-background">
        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">Doc Spring</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={handleLogout}
              className="text-lg underline text-gray-500"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 h-16">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-primary inline-flex items-center px-1 pt-1 text-sm font-medium",
                  { "!border-primary": pathname === item.href }
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
};

export default DashboardLayout;
