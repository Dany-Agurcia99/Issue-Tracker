"use client"
import { User } from "@prisma/client/wasm"
import { Select } from "@radix-ui/themes"
import axios from "axios"
import React, { useEffect } from "react"

const AssigneeSelect = () => {
  const [users, setUsers] = React.useState<User[]>([])
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get<User[]>("/api/users")
      setUsers(data)
    }
    fetchUsers()
  }, [])
  return (
    <Select.Root>
      <Select.Trigger placeholder="Select an assignee" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          {users.map((user) => (
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
