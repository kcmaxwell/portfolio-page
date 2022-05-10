import React from "react";

export default function Project({ img, title, description, code, demo }) {
  return (
    <div className="project">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={code}>
        <button>Code</button>
      </a>
      <a href={demo}>
        <button>Demo</button>
      </a>
    </div>
  );
}
