import { prisma } from "@/prisma/client"
import { Button, Table } from "@radix-ui/themes"
import Link from "next/link"
import React from "react"
import IssueStatusBadge from "../components/IssueStatusBadge"

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany()
  return (
    <div>
      <div className="mb-5">
        <Button>
          <Link href="/issues/new">Create New Issue</Link>
        </Button>
      </div>

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row className="bg-gray-200">
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created At
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Actions
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id} className="hover:bg-gray-100">
              <Table.Cell>
                {issue.title}{" "}
                <div className="block md:hidden">{issue.status}</div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toLocaleDateString()}
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <Link href={`/issues/${issue.id}`}>View</Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default IssuesPage
