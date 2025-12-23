import { Suspense } from "react"
import ProjectsClientPage from "@/components/projects-client-page"
import Loading from "../loading"

export default function ProjectsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <ProjectsClientPage />
    </Suspense>
  )
}
