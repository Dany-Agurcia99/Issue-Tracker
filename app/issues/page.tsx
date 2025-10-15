import { Button } from "@radix-ui/themes"
import React from "react"

const IssuesPage = () => {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Button>New Issue</Button>
    </div>
  )
}

export default IssuesPage
