import { Status } from "@prisma/client"
import { Badge } from "@radix-ui/themes"
import React from "react"

interface IssueStatusBadgeProps {
  status: Status
}

const statusMap: Record<
  Status,
  { label: string; color: "yellow" | "teal" | "red" }
> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "In Progress", color: "yellow" },
  CLOSED: { label: "Closed", color: "teal" },
} 

const IssueStatusBadge = ({ status }: IssueStatusBadgeProps) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  )
}

export default IssueStatusBadge
