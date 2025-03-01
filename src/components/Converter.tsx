import React, { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";

const MarkdownConverter: React.FC = () => {
  const [markdown, setMarkdown] = useState("# Welcome to markdown converter !");

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
      <Preview markdown={markdown} />
    </div>
  );
};

export default MarkdownConverter;
