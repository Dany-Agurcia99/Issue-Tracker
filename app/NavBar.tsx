import Link from "next/link"
import React from "react"
import { GiAlienBug } from "react-icons/gi"

const NavBar = () => {
  const Links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ]

  return (
    <nav className="flex py-6 px-9 space-x-6 items-center border-b border-zinc-200">
      <Link href="/">
        <GiAlienBug className="h-9 w-9 text-teal-600" />
      </Link>
      <ul className="flex space-x-6">
        {Links.map((link, index) => (
          <li
            key={index}
            className="text-zinc-500 font-medium hover:text-zinc-800 transition-colors"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
