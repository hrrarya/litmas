import React, { useState } from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleDropdown = () => {
    setOpen(!open);
  };
  return (
    <header className="bg-white px-4 py-3 flex justify-between items-center absolute w-full">
      <div>
        <h1 className="text-3xl font-bold">
          <Link href="/">
            <a>
              <span className="text-blue-700">Lit</span>
              <span className="text-red-700">mas</span>
            </a>
          </Link>
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <form>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search peoples ..."
            className="border-2 rounded p-2 focus:outline-none focus:border-blue-700"
          />
        </form>
        {!["/login", "/register"].includes(router.pathname) && (
          <div className="relative">
            <button
              onClick={handleDropdown}
              className={`flex items-center p-2 border ml-2 ${
                open && "shadow-sm"
              }`}
            >
              <img
                src="/images/user.svg"
                alt="user avatar"
                className="w-6 h-6 border rounded-full border-gray-700 ml-2 p-0.5 object-contain"
              />
              <FaAngleDown size={20} className="ml-1" />
            </button>
            {open && (
              <div className="absolute flex flex-col items-center justify-items-end bg-white w-full mt-2 border shadow-inner">
                <Link href="/login">
                  <a
                    onClick={handleDropdown}
                    className="py-1 hover:bg-gray-200 w-full px-2 block"
                  >
                    Logout
                  </a>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
