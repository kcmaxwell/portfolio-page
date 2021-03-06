import React from "react";

export default function Section({ title, id, ...props }) {
  return (
    <div className="section">
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        {props.children}
      </div>
    </div>
  );
}
