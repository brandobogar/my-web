import React from "react";

function Button({ title, onClick, type }) {
  return (
    <button
      className="inline-flex items-center px-6 py-2 font-bold tracking-wide text-gray-800 bg-white border-b-2 rounded shadow-md min-w-max border-myteal hover:border-myteal hover:bg-myteal hover:text-white"
      onClick={onClick}
      type={type}
    >
      <span className="mx-auto">{title}</span>
    </button>
  );
}

export default Button;
