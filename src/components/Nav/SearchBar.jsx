import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search character"
        onChange={handleChange}
        value={id}
        className="h-10 ml-2 rounded-l-md"
      />
      <button
        onClick={() => {
          onSearch(id);
          setId("");
        }}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold h-10 px-4 rounded ml-1"
      >
        Add
      </button>
    </div>
  );
}
