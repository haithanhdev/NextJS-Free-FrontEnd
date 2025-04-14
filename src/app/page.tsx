import ButtonRedirect from "@/app/components/ButtonRedirect";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
const isAuth = false;
export default function Home() {
  if (!isAuth) {
    redirect("/login");
  }
  return (
    <main>
      <ul>
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li>
          <Link href={"/register"}>Register</Link>
        </li>
        <ButtonRedirect />
      </ul>
    </main>
  );
}
