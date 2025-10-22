import { prisma } from "@/prisma/client"
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
      <p>IssueDetail for issue #{params.id}</p>
      <p>{issue.title}</p>
      <p>{issue.description}</p>
      <p>Status: {issue.status}</p>
    </div>
  )
}

export default IssueDetail
