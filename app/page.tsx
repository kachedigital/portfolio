import { Suspense } from "react"
import ClientHomePage from "@/components/client-home-page"
import Loading from "./loading"

export default function HomePage() {
  return (
    <Suspense fallback={<Loading />}>
      <ClientHomePage />
    </Suspense>
  )
}
