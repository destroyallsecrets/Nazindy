import { Loader } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <Loader className="h-8 w-8 animate-spin text-blue-500" />
        <p className="text-lg font-medium text-gray-700">Loading video player...</p>
      </div>
    </div>
  )
}

