import { Button, TextArea, TextField } from "@radix-ui/themes"
import React from "react"

const NewIssuePage = () => {
  return (
    <div className="justify-items-center">
      <div className="space-y-3 w-1/2 rounded-lg mt-20">
        <TextField.Root placeholder="Issue Title" />
        <TextArea placeholder="Issue Description" />
        <div className="flex justify-center">
          <Button>Submit New Issue</Button>
        </div>
      </div>
    </div>
  )
}

export default NewIssuePage
