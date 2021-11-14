import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white h-16 p-4 flex justify-between items-center">
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
      <form>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search peoples ..."
          className="border-2 rounded p-2 focus:outline-none focus:border-blue-700"
        />
      </form>
    </header>
  );
};

export default Header;
