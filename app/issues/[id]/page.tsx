import { IssueStatusBadge } from "@/app/components"
import { prisma } from "@/prisma/client"
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes"
import Link from "next/link"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import { Pencil2Icon } from "@radix-ui/react-icons"

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
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <Heading>{issue.title}</Heading>
        <Flex gap="2" align="center" mb="2">
          <IssueStatusBadge status={issue.status} />
          <Text>{issue.createdAt.toLocaleString()}</Text>
        </Flex>
        <Card className="prose" mt="6">
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </Box>
      <Box>
        <Button>
          <Pencil2Icon />
          <Link href={`/issues/${issue.id}/edit`}>Edit Issue</Link>
        </Button>
      </Box>
    </Grid>
  )
}

export default IssueDetail
