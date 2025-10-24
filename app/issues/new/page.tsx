"use client"
import dynamic from "next/dynamic"
import IssueFormLoading from "../components/IssueFormLoading"

const IssueForm = dynamic(() => import("@/app/issues/components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormLoading />,
})

const NewIssuePage = () => {
  return <IssueForm />
}

export default NewIssuePage
