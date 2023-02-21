import React from "react";

export default function Buttons() {
  return (
    <div className="buttons">
      <button className="add-task">Add Task</button>
      <select>
        <option>All</option>
        <option>Incomplete</option>
        <option>Completed</option>
      </select>
    </div>
  );
}
