import IssueStatusBadge from "@/app/components/IssueStatusBadge"
import { prisma } from "@/prisma/client"
import { Card, Flex, Heading, Text } from "@radix-ui/themes"
import { notFound } from "next/navigation"
import { parse } from "path"
import React from "react"

interface Props {
  params: {
    id: string
  }
}

const IssueDetail = async ({ params }: Props) => {
  if (isNaN(parseInt(params.id))) notFound()

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  })

  if (!issue) notFound()

  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex gap="2" align="center" mb="2">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toLocaleString()}</Text>
      </Flex>
      <Card>
        <Text>{issue.description}</Text>
      </Card>
    </div>
  )
}

export default IssueDetail
