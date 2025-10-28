import { prisma } from "@/prisma/client"
import { Avatar, Card, Flex, Heading, Table } from "@radix-ui/themes"
import Link from "next/link"
import { IssueStatusBadge } from "./components"

const LatestIssues = async () => {
  const latestIssues = await prisma.issue.findMany({
    orderBy: { updatedAt: "desc" },
    take: 5,
    include: {
      assignedToUser: true,
    },
  })
  return (
    <Card>
      <Heading size="3" mb="4" ml="3">
        Latest Issues
      </Heading>
      <Table.Root>
        <Table.Body>
          {latestIssues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Flex justify="between">
                  <Flex direction="column" align="start" gap="2">
                    <Link href={`/issues/${issue.id}`}>{issue.title}</Link>{" "}
                    <IssueStatusBadge status={issue.status} />
                  </Flex>
                  {issue.assignedToUser && (
                    <Avatar
                      radius="full"
                      size="2"
                      src={issue.assignedToUser?.image!}
                      fallback={issue.assignedToUser?.name!}
                    />
                  )}
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  )
}

export default LatestIssues
