import { Box } from "@radix-ui/themes"
import React from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const loading = () => {
  return (
    <Box className="max-w-3xl mx-auto py-10">
      <div className="space-y-3 mt-8">
        <Skeleton height={40} />
        <Skeleton height={400} />
      </div>
    </Box>
  )
}

export default loading
