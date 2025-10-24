import { Link } from "@/app/components"
import { Pencil2Icon } from "@radix-ui/react-icons/dist/Pencil2Icon"
import { Box, Button } from "@radix-ui/themes"

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Box>
      <Button>
        <Pencil2Icon />
        <Link href={`/issues/${issueId}/edit`}>Edit Issue</Link>
      </Button>
    </Box>
  )
}

export default EditIssueButton
