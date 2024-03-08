import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import LoginForm from "./form"

export default function LoginPage() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-col items-center space-y-1">
        <h2 className="text-2xl font-bold">Login</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Enter your email below to login to your account</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <LoginForm />
      </CardContent>
    </Card>
  )
}