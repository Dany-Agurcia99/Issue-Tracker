import React from "react"
import { notFound } from "next/navigation"
import { prisma } from "@/prisma/client"
import EditIssueClient from "./EditIssueClient"

interface Props {
  params: Promise<{ id: string }>
}

const EditPage = async ({ params }: Props) => {
  const { id } = await params

  if (isNaN(parseInt(id))) notFound()

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  })

  if (!issue) notFound()

  return <EditIssueClient issue={issue} />
}

export default EditPage
