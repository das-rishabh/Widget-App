import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is React",
    content: "React is a frontend javascripit framework",
  },
  {
    title: "Why use React?",
    content: "React is a favourite frontend liibrary among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "the color green",
    value: "green",
  },
  {
    label: "Shade of Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        onSelectedChange={setSelected}
        selected={selected}
        options={options}
      />
    </div>
  );
};
