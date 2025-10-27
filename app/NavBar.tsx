"use client"
import Link from "next/link"
import React from "react"
import { GiAlienBug } from "react-icons/gi"
import classnames from "classnames"
import { usePathname } from "next/navigation"
import { Skeleton } from "@/app/components"
import { useSession } from "next-auth/react"
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes"

const NavBar = () => {
  return (
    <nav className="py-6 px-9 border-b border-zinc-200">
      <Container>
        <Flex justify="between" align="center">
          <Flex align="center" gap="6">
            <Link href="/">
              <GiAlienBug className="h-9 w-9 text-teal-600" />
            </Link>
            <NavLinks />
          </Flex>
          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  )
}

const AuthStatus = () => {
  const { status, data: session } = useSession()
  if (status === "loading") return <Skeleton width="3rem" />
  if (status === "unauthenticated")
    return (
      <Link href="/api/auth/signin" className="text-zinc-500">
        Sign in
      </Link>
    )
  return (
    <>
      <Box>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Avatar
              src={session!.user!.image!}
              fallback="?"
              radius="full"
              size="2"
              referrerPolicy="no-referrer"
              className="cursor-pointer"
            />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end" sideOffset={5}>
            <DropdownMenu.Label>
              <Text size="2">{session!.user!.email}</Text>
            </DropdownMenu.Label>
            <DropdownMenu.Item>
              <Link href="/api/auth/signout">Sign out</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Box>
    </>
  )
}

const NavLinks = () => {
  const currentPath = usePathname()
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ]
  return (
    <>
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
    </>
  )
}

export default NavBar
