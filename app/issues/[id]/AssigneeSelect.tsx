"use client"
import { User } from "@prisma/client/wasm"
import { Select } from "@radix-ui/themes"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Skeleton } from "@/app/components"
import React, { useEffect } from "react"

const AssigneeSelect = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get<User[]>("/api/users").then((res) => res.data),
    retry: 3,
    staleTime: 2 * 60 * 1000, // 2 minutes
  })

  if (error) return null
  if (isLoading) return <Skeleton height={40} />
  return (
    <Select.Root>
      <Select.Trigger placeholder="Select an assignee" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}

export default AssigneeSelect
