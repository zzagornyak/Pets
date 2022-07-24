import { useState } from "react";

export default function useDragAndDrop() {
  const [dragOver, setDragOver] = useState(false);
  const [fileDropError, setFileDropError] = useState("")

  const onDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const onDragLeave = () => setDragOver(false);
  const OnDragEnter= () => console.log("ENTER")
  return {
    dragOver,
    setDragOver,
    onDragOver,
    onDragLeave,
    fileDropError,
    setFileDropError,
    OnDragEnter
  };
}
