import { IssueStatusBadge } from "@/app/components"
import { ArrowUpIcon } from "@radix-ui/react-icons"
import { Table } from "@radix-ui/themes"
import Link from "next/link"
import NextLink from "next/link"
import { Issue, Status } from "@prisma/client"

export interface IssueQueryParams {
  status: Status
  orderBy: keyof Issue
  page: string
}

interface Props {
  searchParams: IssueQueryParams
  issues: Issue[]
}

const IssueTable = async ({ searchParams, issues }: Props) => {
  const currentParams = {
    status: searchParams.status,
    orderBy: searchParams.orderBy,
    page: searchParams.page,
  }
  return (
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
              {column.value === searchParams.orderBy && (
                <ArrowUpIcon className="inline" />
              )}
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
  )
}

const COLUMNS: { label: string; value: keyof Issue; className?: string }[] = [
  { label: "Title", value: "title" },
  { label: "Status", value: "status", className: "hidden md:table-cell" },
  {
    label: "Created At",
    value: "createdAt",
    className: "hidden md:table-cell",
  },
]
export const columnNames = COLUMNS.map((col) => col.value)

export default IssueTable
