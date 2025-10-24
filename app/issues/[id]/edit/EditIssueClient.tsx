"use client"
import dynamic from "next/dynamic"
import IssueFormLoading from "./loading"
import { Issue } from "@prisma/client"

const IssueForm = dynamic(() => import("@/app/issues/components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormLoading />,
})

interface Props {
  issue: Issue
}

const EditIssueClient = ({ issue }: Props) => {
  return <IssueForm issue={issue} />
}

export default EditIssueClient
