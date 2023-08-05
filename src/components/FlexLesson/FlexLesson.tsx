import React from "react";
import { motion } from "framer-motion";

function FlexLesson() {
  const [flexDirection, setFlexDirection] = React.useState<any>("row");
  const [justifyContent, setJustifyContent] = React.useState("flex-start");
  const [alignItems, setAlignItems] = React.useState("stretch");

  return (
    <section className="flex border mb-96 min-h-[360px] md:min-w-[640px] m-auto flex-col gap-4">
      <div
        style={{ flexDirection, justifyContent, alignItems }}
        className="flex gap-1 min-w min-h-[300px] flex-wrap border p-1"
      >
        {ITEMS.map((item) => (
          <motion.div
            layout={true}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 40,
            }}
            key={item.id}
            className="bg-slate-500 p-2 rounded-md"
          >
            <motion.p layout="position"> {item.label} </motion.p>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-4 flex-wrap justify-between">
        <SelectControl
          label="flex-direction"
          value={flexDirection}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setFlexDirection(event.target.value)
          }
        >
          <option value="row">row</option>
          <option value="column">column</option>
        </SelectControl>
        <SelectControl
          label="justify-content"
          value={justifyContent}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setJustifyContent(event.target.value)
          }
        >
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
          <option value="space-evenly">space-evenly</option>
        </SelectControl>
        <SelectControl
          label="align-items"
          value={alignItems}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setAlignItems(event.target.value)
          }
        >
          <option value="stretch">stretch</option>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
        </SelectControl>
      </div>
    </section>
  );
}

function SelectControl({ label, value, onChange, ...delegated }: any) {
  const id = React.useId();

  return (
    <div className="  flex-wrap flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <select
        className=" text-xs p-2 border bg-transparent rounded-sm"
        value={value}
        onChange={onChange}
        {...delegated}
      />
    </div>
  );
}

const ITEMS = [
  {
    id: "001",
    label: "👨‍💻 Open Source Contributor",
  },
  {
    id: "002",
    label: "🏃  Qwikifier",
  },
  {
    id: "003",
    label: "🧳 Traveler",
  },
  {
    id: "004",
    label: "👨‍⚕️ ❔  Whovian",
  },
  {
    id: "005",
    label: "👨‍🍳 Junior Cook",
  },
  {
    id: "006",
    label: "🥧 quiche Lover",
  },
];

export default FlexLesson;
