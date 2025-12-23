import { Suspense } from "react"
import BlogClientPage from "@/components/blog-client-page"
import Loading from "../loading"

export default function BlogPage() {
  return (
    <Suspense fallback={<Loading />}>
      <BlogClientPage />
    </Suspense>
  )
}
