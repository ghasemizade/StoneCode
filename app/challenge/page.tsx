import { QuestionList } from "@/components/challenge/question-list"
import { ProtectedRoute } from "@/components/protected-route"

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            <ProtectedRoute>
                <QuestionList />
            </ProtectedRoute>
        </main>
    )
}
