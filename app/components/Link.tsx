import NextLink from "next/link"
import { Link as RadixLink } from "@radix-ui/themes"

interface LinkProps {
  href: string
  children?: string
}

const Link = ({ href, children }: LinkProps) => {
  return (
    <RadixLink asChild>
      <NextLink href={href}>{children}</NextLink>
    </RadixLink>
  )
}

export default Link
