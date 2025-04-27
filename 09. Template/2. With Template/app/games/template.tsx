"use client";

import Link from "next/link";
import { useState } from "react";

const Layout = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Hello"
        className="border border-black"
      />{" "}
      <br />
      <Link className="bg-teal-300" href="/games/revenue">
        Revenue
      </Link>{" "}
      <br />
      <Link className="bg-teal-300" href="/games/stats">
        Stats
      </Link>
    </div>
  );
};

export default Layout;
