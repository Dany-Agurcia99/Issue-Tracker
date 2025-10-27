"use client"
import { Skeleton } from "@/app/components"
import { Issue, User } from "@prisma/client/wasm"
import { Select } from "@radix-ui/themes"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const { data: users, error, isLoading } = userUsers()

  if (error) return null
  if (isLoading) return <Skeleton height={40} />

  const handleAssignIssue = async (userId: string) => {
    try {
      await axios.patch("/api/issues/" + issue.id, {
        assignedToUserId: userId != "unassigned" ? userId : null,
      })
      toast.success("Assignee updated successfully")
    } catch (error) {
      toast.error("Failed to update assignee")
    }
  }
  return (
    <>
      <Select.Root
        defaultValue={issue.assignedToUserId ?? "unassigned"}
        onValueChange={handleAssignIssue}
      >
        <Select.Trigger placeholder="Select an assignee" />
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item key="unassigned" value="unassigned">
              Unassigned
            </Select.Item>
            {users?.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  )
}

const userUsers = () =>
  useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get<User[]>("/api/users").then((res) => res.data),
    retry: 3,
    staleTime: 2 * 60 * 1000, // 2 minutes
  })

export default AssigneeSelect
