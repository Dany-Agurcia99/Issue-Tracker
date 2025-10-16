"use client"
import { Button, TextField } from "@radix-ui/themes"
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"

const NewIssuePage = () => {
  return (
    <div className="justify-items-center">
      <div className="space-y-3 w-1/2 rounded-lg mt-20">
        <TextField.Root placeholder="Issue Title" />
        <SimpleMDE placeholder="Issue Description" />
        <div className="flex justify-center">
          <Button>Submit New Issue</Button>
        </div>
      </div>
    </div>
  )
}

export default NewIssuePage
