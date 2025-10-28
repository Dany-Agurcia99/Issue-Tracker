import { Status } from "@prisma/client"
import { Card, Flex, Text } from "@radix-ui/themes"
import Link from "next/link"

interface IssueSummaryProps {
  open: number
  inProgress: number
  closed: number
}

const IssueSummary = ({ open, inProgress, closed }: IssueSummaryProps) => {
  const statuses: { label: string; count: number; status: Status }[] = [
    { label: "Open Issues", count: open, status: "OPEN" },
    {
      label: "Issues In Progress ",
      count: inProgress,
      status: "IN_PROGRESS",
    },
    { label: "Closed Issues", count: closed, status: "CLOSED" },
  ]
  return (
    <Flex gap="4">
      {statuses.map((status) => (
        <Card key={status.label}>
          <Flex
            direction="column"
            gap="1"
            align="center"
            p="2"
            className="text-center"
          >
            <Link href={`/issues/list?status=${status.status}`}>
              {status.label}
            </Link>
            <Text size="6" className="font-bold">
              {status.count}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  )
}

export default IssueSummary
