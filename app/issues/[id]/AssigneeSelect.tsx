"use client"
import { Select } from "@radix-ui/themes"
import React from "react"

const AssigneeSelect = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Select an assignee" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value="1">Dany</Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>Vegetables</Select.Label>
          <Select.Item value="carrot">Carrot</Select.Item>
          <Select.Item value="potato">Potato</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}

export default AssigneeSelect
