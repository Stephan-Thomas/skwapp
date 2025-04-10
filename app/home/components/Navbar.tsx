"use client"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black p-4 sm:p-6 md:flex md:justify-between md:items-center">
        <div className="container mx-auto flex justify-between items-center">
            <a href="" className="text-2xl font-bold">Skwapp</a>
            <div className="`${isOpen?'flex':'hidden'} flex-col md:flex-row`">
                <Link href="/" className="mx-2 hover:text-green-300">Home</Link>
                <Link href="/explore" className="mx-2 hover:text-green-300">Explore</Link>
                <Link href="/seller" className="mx-2 hover:text-green-300">Become a Seller</Link>
                <Link href="/signin" className="mx-2 hover:text-green-300">Sign In</Link>
                <Link href="/join" className="mx-2 hover:text-green-300">Join</Link>
            </div>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={()=>{
            setIsOpen(!isOpen)
          }}></button>
          </div>

    </nav>
  )
}

export default Navbar