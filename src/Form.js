import React from "react";

export default function Form() {
  return (
    <form>
      <input
        type="search"
        name="search-city"
        placeholder="Search for city..."
        className="Form"
      />
      <input type="submit" value="Search" className="Button" />
    </form>
  );
}
