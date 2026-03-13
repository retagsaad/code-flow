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
      id="features"
      className="py-16 mt-20 max-w-6xl mx-auto  scroll-smooth sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-white font-bold md:text-5xl sm:text-4xl lg:text-5xl text-5xl leading-snug sm:mb-6">
          Your Complete Development <br />
          <span className="text-blue-400">Workflow</span>
        </h1>
      </div>

      <div className="space-y- sm:space-y-20 lg:space-y-14">
        {features.map((feature, key) => (
          <div key={key} className=" ">
            <div className="flex gap-10">
            <div className={` mt-30 ${ feature.imagePosition === "left"? "mr-auto": feature.imagePosition === "right"? "ml-auto": ""}`}>
              <h1 className="text-2xl font-bold mb-5">{feature.title}</h1>
              <p className="w-md text-gray-500">{feature.description}</p>
            </div>
            <div className="bg-gray-800/40  p-5 rounded-xl w-lg h-full mt-20">
            <div className="flex absolute p-2">
              <p className="ml-12">{feature.title}</p>
              <img src={feature.img} alt="" className="w-10 h-7 absolute " />
            </div>
              <SyntaxHighlighter
                language="javascript"
                style={nightOwl}
                customStyle={{
                  
                  borderRadius: "8px",
                  fontSize: "11px",
                  lineHeight: "1.4",
                  height: "100%",
                  border: "1px solid #3c3c3c",
                  width:"100%",
                  padding:"40px",
                  
                }}
              >
                {feature.code}
              </SyntaxHighlighter>
            </div>
          </div>
          </div>
        ))}
      </div>

      
    </div>
  );
}
