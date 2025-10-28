import { prisma } from "@/prisma/client"
import { Status } from "@prisma/client"
import IssueActions from "./IssueActions"

import Pagination from "../components/Pagination"
import IssueTable, { columnNames, IssueQueryParams } from "./IssueTable"
import { Flex } from "@radix-ui/themes"
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface"

interface Props {
  searchParams: IssueQueryParams
}

const IssuesPage = async ({ searchParams }: Props) => {
  const { status, orderBy } = await searchParams
  const statuses = Object.values(Status)
  const validStatus = status && statuses.includes(status) ? status : undefined

  const where = { status: validStatus }

  const validOrderBy =
    orderBy && columnNames.includes(orderBy) ? { [orderBy]: "asc" } : undefined

  const page = parseInt(searchParams.page) || 1
  const pageSize = 10
  const issues = await prisma.issue.findMany({
    where,
    orderBy: validOrderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  })
  const issueCount = await prisma.issue.count({
    where,
  })

  const currentParams = { status, orderBy, page: page.toString() }
  return (
    <Flex direction="column" gap="5">
      <IssueActions />
      <IssueTable searchParams={currentParams} issues={issues} />
      <Pagination
        itemcount={issueCount}
        pageSize={pageSize}
        currentPage={page}
      />
    </Flex>
  )
}

export const metadata: Metadata = {
  title: "Issue Tracker - Issue List",
  description: "List of issues in the Issue Tracker application",
}
export const dynamic = "force-dynamic"
export default IssuesPage
