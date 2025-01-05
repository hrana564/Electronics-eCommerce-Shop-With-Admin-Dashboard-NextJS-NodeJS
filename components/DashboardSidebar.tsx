"use client";

import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaTable, FaRegUser, FaGear, FaBagShopping } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

const DashboardSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="xl:w-[400px] bg-blue-500 h-full">
      {/* Hamburger Icon for mobile */}
      <div className="flex items-center lg:hidden p-4">
        <FaBars className="text-2xl text-white cursor-pointer" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      </div>

      {/* Sidebar Content */}
      <div className={`flex-col gap-y-2 lg:flex-row lg:items-center lg:gap-y-0 ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
        <Link href="/admin">
          <div className="flex gap-x-2 w-full hover:bg-blue-600 cursor-pointer items-center py-6 pl-5 text-xl text-white">
            <MdDashboard className="text-2xl" />{" "}
            <span className="font-normal">Dashboard</span>
          </div>
        </Link>
        <Link href="/admin/orders">
          <div className="flex gap-x-2 w-full hover:bg-blue-600 cursor-pointer items-center py-6 pl-5 text-xl text-white">
            <FaBagShopping className="text-2xl" />{" "}
            <span className="font-normal">Orders</span>
          </div>
        </Link>
        <Link href="/admin/products">
          <div className="flex gap-x-2 w-full hover:bg-blue-600 cursor-pointer items-center py-6 pl-5 text-xl text-white">
            <FaTable className="text-2xl" />{" "}
            <span className="font-normal">Products</span>
          </div>
        </Link>
        <Link href="/admin/categories">
          <div className="flex gap-x-2 w-full hover:bg-blue-600 cursor-pointer items-center py-6 pl-5 text-xl text-white">
            <MdCategory className="text-2xl" />{" "}
            <span className="font-normal">Categories</span>
          </div>
        </Link>
        <Link href="/admin/users">
          <div className="flex gap-x-2 w-full hover:bg-blue-600 cursor-pointer items-center py-6 pl-5 text-xl text-white">
            <FaRegUser className="text-2xl" />{" "}
            <span className="font-normal">Users</span>
          </div>
        </Link>
        <Link href="/admin/settings">
          <div className="flex gap-x-2 w-full hover:bg-blue-600 cursor-pointer items-center py-6 pl-5 text-xl text-white">
            <FaGear className="text-2xl" />{" "}
            <span className="font-normal">Settings</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;
