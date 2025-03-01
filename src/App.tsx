import React from "react";
import MarkdownConverter from "./components/Converter";
import './index.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="converter-wrapper">
        <MarkdownConverter />
      </div>
    </div>
  );
};

export default App;
