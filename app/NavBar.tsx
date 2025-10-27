"use client"
import Link from "next/link"
import React from "react"
import { GiAlienBug } from "react-icons/gi"
import classnames from "classnames"
import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"
import { Box } from "@radix-ui/themes"

const NavBar = () => {
  const currentPath = usePathname()
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ]

  const { status, data: session } = useSession()

  return (
    <nav className="flex py-6 px-9 space-x-6 items-center border-b border-zinc-200">
      <Link href="/">
        <GiAlienBug className="h-9 w-9 text-teal-600" />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link, index) => (
          <li
            key={index}
            className={classnames({
              "text-zinc-500": link.href !== currentPath,
              "text-zinc-800 border-b-2 border-teal-600":
                link.href === currentPath,
              "hover:text-zinc-800 transition-colors": true,
            })}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <Box>
        {status === "authenticated" ? (
          <Link href="/api/auth/signout" className="text-zinc-700">
            Sign out
          </Link>
        ) : (
          <Link href="/api/auth/signin" className="text-zinc-700">
            Sign in
          </Link>
        )}
      </Box>
    </nav>
  )
}

export default NavBar
