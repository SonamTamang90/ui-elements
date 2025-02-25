import dedent from "dedent";

const CodeBlock = ({ code }) => {
  const dedentedCode = dedent(code);
  return (
    <pre>
      <code>{dedentedCode}</code>
    </pre>
  );
};

export default CodeBlock;
