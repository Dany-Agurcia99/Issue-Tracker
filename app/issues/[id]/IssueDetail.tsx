import { IssueStatusBadge } from "@/app/components"
import { Issue } from "@prisma/client"
import { Card, Flex, Heading, Text } from "@radix-ui/themes"
import ReactMarkdown from "react-markdown"

const IssueDetail = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <Heading>{issue.title}</Heading>
      <Flex gap="2" align="center" mb="2">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toLocaleString()}</Text>
      </Flex>
      <Card className="prose max-w-full" mt="6">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </>
  )
}

export default IssueDetail
