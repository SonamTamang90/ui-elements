"use client";

import React, { useEffect, useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { HiMiniCheck, HiOutlineClipboard } from "react-icons/hi2";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-markup";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const formatCode = (code) => {
  // Remove any leading/trailing whitespace
  const trimmed = code.trim();

  // Split into lines
  const lines = trimmed.split("\n");

  // Find the minimum indentation level
  const minIndent = lines
    .filter((line) => line.trim())
    .reduce((min, line) => {
      const indent = line.match(/^\s*/)[0].length;
      return indent < min ? indent : min;
    }, Infinity);

  // Remove the common indentation from all lines
  const formatted = lines.map((line) => line.slice(minIndent)).join("\n");

  return formatted;
};

const CodeBlock = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const formattedCode = formatCode(code);

  return (
    <pre className="rounded-lg overflow-x-auto">
      <code className={`language-${language}`}>{formattedCode}</code>
    </pre>
  );
};

const ComponentPreview = ({
  title,
  description,
  children,
  reactCode,
  htmlCode,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const CopyButton = ({ code }) => (
    <div className="absolute right-4 top-4 backdrop-blur-sm">
      <button
        onClick={() => handleCopy(code)}
        className="py-2 px-3 text-xs font-semibold rounded-full text-zinc-400 hover:text-zinc-200 hover:bg-zinc-600 transition-colors"
        aria-label={copied ? "Copied!" : "Copy code"}
      >
        {copied ? (
          <span>Copied!</span>
        ) : (
          <span className="flex items-center gap-1">
            <HiOutlineClipboard size={14} />
            Copy
          </span>
        )}
      </button>
    </div>
  );

  return (
    <div className="bg-dark-700 rounded-2xl overflow-hidden ring-1 ring-dark-300 shadow-md">
      <TabGroup>
        {/* Component Header */}
        <div className="bg-dark-900 flex items-center justify-between border-y border-t-transparent border-b-dark-300 h-16 px-6">
          <h3 className="font-bebas text-xl tracking-wider font-semibold text-zinc-200">
            {title}
          </h3>
          <TabList className="flex gap-2">
            {["Preview", "React", "HTML"].map((tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  classNames(
                    "bg-dark-300 rounded-full text-sm py-1 px-3 border border-transparent",
                    selected
                      ? "border-green-300 text-zinc-200 bg-zinc-600 font-semibold focus:outline-none"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-600"
                  )
                }
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </div>
        <TabPanels className="p-6">
          <TabPanel>{children}</TabPanel>
          {/* React Code Panel */}
          <TabPanel>
            <div className="relative">
              <CopyButton code={reactCode} />
              <pre className="overflow-x-auto">
                <code className="text-gray-100 text-sm">{reactCode}</code>
              </pre>
            </div>
          </TabPanel>

          {/* HTML Code Panel */}
          <TabPanel>
            <div className="relative">
              <CopyButton code={htmlCode} />
              <pre className="overflow-x-auto text-sm">
                <CodeBlock code={htmlCode} language="markup" />
              </pre>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default ComponentPreview;

// // Example Button Component
// const ExampleButton = () => (
//   <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
//     Click me
//   </button>
// );

// const reactCode = `const Button = () => (
//   <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
//     Click me
//   </button>
// );`;

// const htmlCode = `<button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
//   Click me
// </button>`;

// const Cards = () => {
//   return (
//     <div className="p-8">
//       <ComponentPreview
//         title="Button Component"
//         description="A simple button component with hover effects"
//         reactCode={reactCode}
//         htmlCode={htmlCode}
//       >
//         <ExampleButton />
//       </ComponentPreview>
//     </div>
//   );
// };

// export default Cards;
