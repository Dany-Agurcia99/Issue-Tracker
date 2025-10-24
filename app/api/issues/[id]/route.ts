import { issueSchema } from "@/app/validationSchemas"
import { prisma } from "@/prisma/client"
import delay from "delay"
import { NextRequest, NextResponse } from "next/server"

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const body = await request.json()
  const validation = issueSchema.safeParse(body)

  await delay(1000)

  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 })

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  })

  if (!issue)
    return NextResponse.json({ error: "Issue not found" }, { status: 404 })

  const updatedIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: {
      title: body.title,
      description: body.description,
    },
  })

  return NextResponse.json(updatedIssue, { status: 200 })
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  await delay(1000)

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  })

  if (!issue)
    return NextResponse.json({ error: "Issue not found" }, { status: 404 })

  const deletedIssue = await prisma.issue.delete({
    where: { id: issue.id },
  })

  return NextResponse.json(deletedIssue, { status: 200 })
}
