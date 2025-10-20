"use client"
import { Button, Callout, TextField } from "@radix-ui/themes"
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import { useForm, Controller } from "react-hook-form"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface IssueFormData {
  title: string
  description: string
}

const NewIssuePage = () => {
  const { register, handleSubmit, control } = useForm<IssueFormData>()
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (data: IssueFormData) => {
    try {
      await axios.post("/api/issues", data)
      router.push("/issues")
    } catch (error) {
      setError("Failed to create issue.")
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
          <TextField.Root placeholder="Issue Title" {...register("title")} />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <SimpleMDE placeholder="Issue Description" {...field} />
            )}
          />

          <div className="flex justify-center">
            <Button>Submit New Issue</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default NewIssuePage
