import { Button, Flex } from "@radix-ui/themes"
import Link from "next/link"
import IssueStatusFilter from "./IssueStatusFilter"

const issueActions = () => {
  return (
    <Flex justify="between">
      <IssueStatusFilter />
      <Button>
        <Link href="/issues/new">Create New Issue</Link>
      </Button>
    </Flex>
  )
}

export default issueActions
