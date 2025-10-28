import { IssueStatusBadge, Link } from "@/app/components"
import { prisma } from "@/prisma/client"
import { Table } from "@radix-ui/themes"
import IssueActions from "./IssueActions"
import { Issue, Status } from "@prisma/client"
import NextLink from "next/link"
import { ArrowUpIcon } from "@radix-ui/react-icons"
import Pagination from "../components/Pagination"

interface Props {
  searchParams: { status?: Status; orderBy?: keyof Issue; page: string }
}

const IssuesPage = async ({ searchParams }: Props) => {
  const COLUMNS: { label: string; value: keyof Issue; className?: string }[] = [
    { label: "Title", value: "title" },
    { label: "Status", value: "status", className: "hidden md:table-cell" },
    {
      label: "Created At",
      value: "createdAt",
      className: "hidden md:table-cell",
    },
  ]

  const { status, orderBy } = await searchParams
  const statuses = Object.values(Status)
  const validStatus = status && statuses.includes(status) ? status : undefined

  const where = { status: validStatus }

  const validOrderBy =
    orderBy && COLUMNS.map((col) => col.value).includes(orderBy)
      ? { [orderBy]: "asc" }
      : undefined

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

  const currentParams = { status, orderBy, page }
  return (
    <div>
      <IssueActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row className="bg-gray-200">
            {COLUMNS.map((column) => (
              <Table.ColumnHeaderCell
                key={column.value}
                className={column.className}
              >
                <NextLink
                  href={{ query: { ...currentParams, orderBy: column.value } }}
                >
                  {column.label}
                </NextLink>
                {column.value === orderBy && <ArrowUpIcon className="inline" />}
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id} className="hover:bg-gray-100">
              <Table.Cell>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                <div className="block md:hidden">{issue.status}</div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toLocaleDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <Pagination
        itemcount={issueCount}
        pageSize={pageSize}
        currentPage={page}
      />
    </div>
  )
}
export const dynamic = "force-dynamic"
export default IssuesPage
