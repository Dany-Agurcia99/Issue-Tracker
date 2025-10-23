import { Flex, Card, Box } from "@radix-ui/themes"
import React from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const loading = () => {
  return (
    <Box className="max-w-3xl">
      <Skeleton height={40} width={500} />
      <Flex gap="2" align="center" mb="2">
        <Skeleton width={50} />
        <Skeleton width={200} />
      </Flex>
      <Card className="prose" mt="6">
        <Skeleton count={3} />
      </Card>
    </Box>
  )
}

export default loading
