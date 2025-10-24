"use client"
import { AlertDialog, Button, Flex } from "@radix-ui/themes"
import axios from "axios"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  const handleDeleteIssue = async () => {
    try {
      setIsLoading(true)
      await axios.delete(`/api/issues/${issueId}`)
      router.push("/issues")
    } catch (error) {
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red">Delete Issue</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to delete this issue? This action cannot be
            undone.
          </AlertDialog.Description>
          <Flex mt="4" gap="2">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button onClick={handleDeleteIssue} variant="solid" color="red">
                Delete Issue
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            This Issue could not be deleted. Please try again.
          </AlertDialog.Description>
          <Button
            onClick={() => setError(false)}
            mt="4"
            variant="soft"
            color="red"
          >
            OK
          </Button>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  )
}

export default DeleteIssueButton
