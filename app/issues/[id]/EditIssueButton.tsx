import { Link } from "@/app/components"
import { Pencil2Icon } from "@radix-ui/react-icons/dist"
import { Box, Button } from "@radix-ui/themes"

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button>
      <Pencil2Icon />
      <Link href={`/issues/${issueId}/edit`}>Edit Issue</Link>
    </Button>
  )
}

export default EditIssueButton
