const features = [
  {
    title: "AI Code Completion",
    description:
      "Intelligent code suggestions powered by advanced AI that learns from your coding patterns. Get real-time assistance with syntax, logic, and best practices.",
    image: "code-completion",
    imagePosition: "left",
    img: "lights.png",
    code: `function handleSubmit() {
  // AI suggests next line
  const data = await fetch("/api/submit")
  // Auto-completed by AI
}`,
  },
  {
    title: "Automated Testing",
    description:
      "Generate comprehensive test suites automatically. Our AI analyzes your code and creates unit tests, integration tests, and edge case coverage.",
    image: "Automated Testing",
    imagePosition: "right",
    img: "lights.png",
    code: `describe("User Authentication", () => {
  // Auto-generated tests
  it("should login successfully", () => {
    // Test implementation
  })
})`,
  },
  {
    title: "Smart Debugging",
    description:
      "Identify and fix bugs before they reach production. AI-powered error detection and resolution suggestions help you debug faster.",
    image: "Smart Debugging",
    imagePosition: "left",
    img: "lights.png",
    code: `// Error detected in line 15

// AI suggests fix
const result = await processData(input)
// Fixed: Added await keyword

// Bug resolved automatically`,
  },
];
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Features() {
  return (
    <div
      className="max-w-6xl mx-auto px-5 md:px-10 lg:px-20 py-16"
      id="features"
    >
      {features.map((feature, key) => (
        <div
          key={key}
          className={`flex flex-col md:flex-row items-center gap-10 mb-16 ${
            feature.imagePosition === "right" ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
            <p className="text-gray-500">{feature.description}</p>
          </div>

          <div className="w-full md:w-1/2 bg-gray-800/40 p-5 rounded-xl">
            <SyntaxHighlighter language="javascript" style={nightOwl}>
              {feature.code}
            </SyntaxHighlighter>
          </div>
        </div>
      ))}
    </div>
  );
}
