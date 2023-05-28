import React from "react";

function Button({ title, onClick, type }) {
  return (
    <button
      class="w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-emerald-400 hover:border-emerald-400 hover:bg-emerald-400 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
      onClick={onClick}
      type={type}
    >
      <span class="mx-auto">{title}</span>
    </button>
  );
}

export default Button;
