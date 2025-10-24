"use client"
import { ErrorMessage, Spinner } from "@/app/components"
import { issueSchema } from "@/app/validationSchemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { Issue } from "@prisma/client"
import { Button, Callout, TextField } from "@radix-ui/themes"
import axios from "axios"
import "easymde/dist/easymde.min.css"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"

// Dynamically import SimpleMDE to prevent SSR issues
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
})
type IssueFormData = z.infer<typeof issueSchema>

const IssueForm = ({ issue }: { issue?: Issue }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(issueSchema),
  })
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data: IssueFormData) => {
    try {
      setIsSubmitting(true)
      if (issue) await axios.patch(`/api/issues/${issue.id}`, data)
      else await axios.post("/api/issues", data)
      router.push("/issues")
    } catch (error) {
      setError("Failed to create issue.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto py-10">
      {error && (
        <Callout.Root color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-3 mt-8">
          <TextField.Root
            defaultValue={issue?.title}
            placeholder="Issue Title"
            {...register("title")}
          />

          <ErrorMessage>{errors.title?.message}</ErrorMessage>

          <Controller
            name="description"
            control={control}
            defaultValue={issue?.description}
            render={({ field }) => (
              <SimpleMDE placeholder="Issue Description" {...field} />
            )}
          />
          <ErrorMessage>{errors.description?.message}</ErrorMessage>
          <div className="flex justify-center">
            <Button disabled={isSubmitting}>
              {issue ? "Update Issue" : "Submit New Issue"}{" "}
              {isSubmitting && <Spinner />}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default IssueForm
