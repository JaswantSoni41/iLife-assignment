"use client"
import Link from "next/link"
import { ModeToggle } from "./ModeToggle"


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-4 sticky top-0 z-50 shadow-md dark:shadow-white/10 dark:bg-[#1D1D1D] w-full">
      <h1 className="font-bold"><Link href={"/"}>Logo + Name</Link></h1>
    </nav>
  )
}

export default Navbar
