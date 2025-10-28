import Pagination from "./issues/components/Pagination"

export default function Home() {
  return <Pagination itemcount={100} pageSize={10} currentPage={1} />
}
