import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons"
import { Button, Flex, Text } from "@radix-ui/themes"
import React from "react"

interface PaginationProps {
  itemcount: number
  pageSize: number
  currentPage: number
  align?: "start" | "center" | "end"
}
const Pagination = ({
  itemcount,
  pageSize,
  currentPage,
  align,
}: PaginationProps) => {
  const totalPages = Math.ceil(itemcount / pageSize)
  if (totalPages <= 1) return null
  return (
    <Flex align="center" justify={align || "center"}>
      <Text>
        Page {currentPage} of {totalPages}
      </Text>
      <Button
        color="gray"
        variant="soft"
        disabled={currentPage === 1}
        style={{ marginLeft: 8 }}
      >
        <DoubleArrowLeftIcon />
      </Button>
      <Button
        color="gray"
        variant="soft"
        disabled={currentPage === 1}
        style={{ marginLeft: 8 }}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        color="gray"
        variant="soft"
        disabled={currentPage === totalPages}
        style={{ marginLeft: 8 }}
      >
        <ChevronRightIcon />
      </Button>
      <Button
        color="gray"
        variant="soft"
        disabled={currentPage === totalPages}
        style={{ marginLeft: 8 }}
      >
        <DoubleArrowRightIcon />
      </Button>
    </Flex>
  )
}

export default Pagination
