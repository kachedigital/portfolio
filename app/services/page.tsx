import { Suspense } from "react"
import ServicesClientPage from "@/components/services-client-page"
import Loading from "../loading"

export default function ServicesPage() {
  return (
    <Suspense fallback={<Loading />}>
      <ServicesClientPage />
    </Suspense>
  )
}
