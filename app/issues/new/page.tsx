"use client"
import { Button, TextField } from "@radix-ui/themes"
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import { useForm, Controller } from "react-hook-form"
import axios from "axios"
import { useRouter } from "next/navigation"

interface IssueFormData {
  title: string
  description: string
}

const NewIssuePage = () => {
  const { register, handleSubmit, control } = useForm<IssueFormData>()
  const router = useRouter()
  const onSubmit = async (data: IssueFormData) => {
    await axios.post("/api/issues", data)
    router.push("/issues")
  }

  return (
    <form className="justify-items-center" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-3 w-1/2 rounded-lg mt-20">
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
  )
}

export default NewIssuePage
