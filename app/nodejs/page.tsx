import { createMetadata } from "@/lib/metadata";
import NodeJSQuiz from "./nodejsQuizClient";

export const metadata = createMetadata({
    title: "Node.js Interview Questions & Quiz | Stone Code",
    description: "Test your Node.js knowledge with interactive interview questions and quizzes. Practice event loop, async programming, APIs, Express, and backend architecture concepts.",
    path: "/nodejs",
});

export default function CssPage() {
    return <NodeJSQuiz />;
}
