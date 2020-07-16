import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React",
    content: "React is a frontend javascripit framework",
  },
  {
    title: "Why use React?",
    content: "React iis a favourite frontend liibrary among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
