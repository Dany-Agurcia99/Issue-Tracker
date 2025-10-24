import React from "react"
import IssueForm from "../../components/IssueForm"
import { notFound } from "next/dist/client/components/navigation"
import { prisma } from "@/prisma/client"

const EditPage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  })

  if (!issue) notFound()
  return <IssueForm issue={issue} />
}

export default EditPage
