"use client"
import { Card } from "@radix-ui/themes"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import React from "react"

interface IssueSummaryProps {
  open: number
  inProgress: number
  closed: number
}

const IssueChart = ({ open, inProgress, closed }: IssueSummaryProps) => {
  const data = [
    { name: "Open", value: open, color: "#8884d8" },
    { name: "In Progress", value: inProgress, color: "#82ca9d" },
    { name: "Closed", value: closed, color: "#ffc658" },
  ]
  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="value"
            barSize={75}
            style={{ fill: "var(--accent-9)" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default IssueChart
