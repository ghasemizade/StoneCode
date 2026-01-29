import { createMetadata } from "@/lib/metadata";
import JavaScriptQuiz from "./javascriptQuizClient";

export const metadata = createMetadata({
    title: "JavaScript Interview Questions & Quiz | Stone Code",
    description: "Practice JavaScript interview questions with real-world quizzes. Cover closures, async, promises, ES6+, and core JS concepts.",
    path: "/javascript",
});

export default function CssPage() {
    return <JavaScriptQuiz />;
}
