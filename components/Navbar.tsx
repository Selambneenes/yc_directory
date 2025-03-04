"use client"
import { auth } from "@/auth"
import { signIn, signOut } from "next-auth/react";
import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  const session = auth();
  return (
    <div className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30}></Image>
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <button onClick={() => signOut({ redirectTo: "/" })}>
                Logout
              </button>

              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>wha
              </Link>
            </>
          ): (
            <button onClick={() => signIn("github")}>
              Login
            </button>
          )}
        </div>
      </nav>
    </div>
  )
}
export default Navbar