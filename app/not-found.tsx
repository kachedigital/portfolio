import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary text-white">
      <div className="text-center max-w-md p-6">
        <h1 className="text-6xl font-display font-bold mb-4 text-accent-orange">404</h1>
        <h2 className="text-2xl font-display font-semibold mb-4 text-white">Page Not Found</h2>
        <p className="text-zinc-300 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Button
          asChild
          className="bg-accent-purple hover:bg-accent-orange text-white rounded-xl px-6 py-3 transition-all duration-300"
        >
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </div>
  )
}
