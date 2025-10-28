import { parse } from "path"
import Pagination from "./issues/components/Pagination"

export default function Home({
  searchParams,
}: {
  searchParams: { page: string }
}) {
  return (
    <Pagination
      itemcount={100}
      pageSize={10}
      currentPage={parseInt(searchParams.page)}
    />
  )
}
