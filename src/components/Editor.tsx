import React from "react";

interface EditorProps {
  markdown: string;
  setMarkdown: (value: string) => void;
}

const Editor: React.FC<EditorProps> = ({ markdown, setMarkdown }) => {
  return (
    <textarea
      className="editor"
      value={markdown}
      onChange={(e) => setMarkdown(e.target.value)}
      placeholder="Écrivez votre Markdown ici..."
    />
  );
};

export default Editor;
