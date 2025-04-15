import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4">
      <ul className="flex gap-4">
        <li>
          <Link href={"/register"}>Đăng ký</Link>
        </li>
        <li>
          <Link href={"/login"}>Đăng nhập</Link>
        </li>
      </ul>
      <ModeToggle />
    </div>
  );
}
