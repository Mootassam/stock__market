import React, { useEffect } from "react";
import "./sidebar.css";
import optionBank from "../../data/OptionBank";
import { FaEraser, FaUndo } from "react-icons/fa";
function Sidebar({
  screenshot,
  value,
  setvalue,
  setAmount,
  setSize,
  size,
  undo,
  erase,
  color,
  changeColor,
  brushSize,
  changeBrushSize,
  clear,
}) {
  useEffect(() => {
    let data;
  }, [value]);

  return (
    <div className="app__sidebar">
      <div className="app__screenshot" onClick={() => screenshot()}>
        <img src="sidebar/screenshot.png" alt="" width={140} />
      </div>
    </div>
  );
}

export default Sidebar;
