"use client"
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons"
import { Button, Flex, Text } from "@radix-ui/themes"
import { useRouter, useSearchParams } from "next/navigation"
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
  const router = useRouter()
  const searchParams = useSearchParams()

  const totalPages = Math.ceil(itemcount / pageSize)
  if (totalPages <= 1) return null

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", page.toString())
    router.push(`?${params.toString()}`)
  }

  return (
    <Flex align="center" justify={align || "center"} mt="4">
      <Text size="2" mr="4">
        Page {currentPage} of {totalPages}
      </Text>
      <Button
        color="gray"
        variant="soft"
        disabled={currentPage === 1}
        onClick={() => changePage(1)}
        style={{ marginLeft: 8 }}
      >
        <DoubleArrowLeftIcon />
      </Button>
      <Button
        color="gray"
        variant="soft"
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
        style={{ marginLeft: 8 }}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        color="gray"
        variant="soft"
        disabled={currentPage === totalPages}
        onClick={() => changePage(currentPage + 1)}
        style={{ marginLeft: 8 }}
      >
        <ChevronRightIcon />
      </Button>
      <Button
        color="gray"
        variant="soft"
        disabled={currentPage === totalPages}
        onClick={() => changePage(totalPages)}
        style={{ marginLeft: 8 }}
      >
        <DoubleArrowRightIcon />
      </Button>
    </Flex>
  )
}

export default Pagination
