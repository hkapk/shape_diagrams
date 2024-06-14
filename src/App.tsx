import { Editor } from "@dgmjs/core";
import { DGMEditor } from "@dgmjs/react";

function App() {
  const handleMount = async (editor: Editor) => {
    editor.newDoc();
    editor.fitToScreen();
    window.addEventListener("resize", () => {
      editor.fit();
    });
  };

  return (
    <DGMEditor
      className="absolute inset-0 border rounded-lg"
      onMount={handleMount}
    />
  );
}

export default App;
