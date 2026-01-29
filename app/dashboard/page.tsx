"use client"

import { useAuth } from "@/lib/auth-context"
import { ProtectedRoute } from "@/components/protected-route"
import QuizSelector from "@/components/quiz-selector"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/ui/ThemeToggle"

function DashboardContent() {
    const { user, logout } = useAuth()

    const handleLogout = () => {
        logout()
    }

    return (
        <main className="min-h-screen bg-linear-to-br from-background via-card to-background">
            {/* Header */}
            <header className="border-b border-border z-10 relative">
                <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Image src={"/logo.png"} height={60} width={60} alt="stonecode logo"></Image>
                        <h1 className="text-2xl font-bold text-foreground">Stone Code</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Link href="/challenge">
                            <Button variant="outline">Challenge</Button>
                        </Link>
                        <Link href="/profile">
                            <Button variant="outline">My Profile</Button>
                        </Link>
                        <Button onClick={handleLogout} variant="destructive">
                            Logout
                        </Button>
                    </div>
                </div>
            </header>

            {/* Quiz Selector */}
            <div className="py-8">
                <QuizSelector />
            </div>
        </main>
    )
}

export default function Dashboard() {
    return (
        <ProtectedRoute>
            <DashboardContent />
        </ProtectedRoute>
    )
}
