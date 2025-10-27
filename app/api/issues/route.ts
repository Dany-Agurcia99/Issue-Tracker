import { prisma } from "@/prisma/client"
import { NextRequest, NextResponse } from "next/server"
import { issueSchema } from "../../validationSchemas"
import authOptions from "@/auth/authOptions"
import { getServerSession } from "next-auth"

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  
  const body = await request.json()
  const validation = issueSchema.safeParse(body)

  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 })

  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  })

  return NextResponse.json(newIssue, { status: 201 })
}
