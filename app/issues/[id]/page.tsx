import { prisma } from "@/prisma/client"
import { Box, Flex, Grid } from "@radix-ui/themes"
import { notFound } from "next/navigation"
import IssueDetail from "./IssueDetail"
import EditIssueButton from "./EditIssueButton"
import DeleteIssueButton from "./DeleteIssueButton"
import { getServerSession } from "next-auth"
import authOptions from "@/auth/authOptions"
import AssigneeSelect from "./AssigneeSelect"
import { cache } from "react"

interface Props {
  params: {
    id: string
  }
}

const getIssue = cache((issueId: number) =>
  prisma.issue.findUnique({
    where: { id: issueId },
  })
)

const IssueDetailPage = async ({ params }: Props) => {
  const issueId = await parseInt(params.id)
  const session = await getServerSession(authOptions)

  if (isNaN(issueId)) notFound()
  const issue = await getIssue(issueId)

  if (!issue) notFound()

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-4">
        <IssueDetail issue={issue} />
      </Box>
      {session && (
        <Box>
          <Flex gap="3" direction="column">
            <AssigneeSelect issue={issue} />
            <EditIssueButton issueId={issue.id} />
            <DeleteIssueButton issueId={issue.id} />
          </Flex>
        </Box>
      )}
    </Grid>
  )
}
export async function generateMetadata({ params }: Props) {
  const issue = await getIssue(parseInt(params.id))

  if (!issue) notFound()

  return {
    title: `Issue Tracker - ${issue.title}`,
    description: `Detailed view of issue #${issue.id} in the Issue Tracker application`,
  }
}
export default IssueDetailPage
