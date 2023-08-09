import React from "react";
import { motion } from "framer-motion";
import { LayoutGroup, AnimatePresence, Reorder } from "framer-motion";

const box = {
  hidden: { y: -10, opacity: 0, gap: "6px" },
  visible: {
    y: 0,
    opacity: 1,
    gap: "20px",
  },
};

function FlexLesson() {
  const [items, setItems] = React.useState(ITEMS);
  const [flexDirection, setFlexDirection] = React.useState<any>("column");
  const [justifyContent, setJustifyContent] = React.useState("space-between");
  const [alignItems, setAlignItems] = React.useState("stretch");

  return (
    <motion.section
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 40,
      }}
      variants={box}
      initial="hidden"
      animate="visible"
      className="flex overflow-y-hidden border mb-56 min-h-[360px] max-w-[480px] m-auto mx-4 md:mx-auto flex-col gap-4"
    >
      <motion.h1
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 40,
          gap: { delay: 0.8, duration: 0.6, ease: "easeInOut" },
        }}
        variants={box}
        initial="hidden"
        animate="visible"
        className="text-4xl my-auto flex flex-row  pt-4 self-center"
      >
        Lemme{" "}
        <motion.div
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 40,
            scale: { delay: 0.8, ease: "easeInOut" },
          }}
          variants={{
            start: { scale: 1 },
            finish: {
              scale: 1.4,
              transition: { delay: 0.8, duration: 0.6, ease: "easeInOut" },
            },
          }}
          initial="start"
          animate="finish"
          className="-z-10"
        >
          Flex
        </motion.div>
        💪
      </motion.h1>
      {flexDirection === "column" ? (
        <LayoutGroup>
          <Reorder.Group
            axis="y"
            style={{ flexDirection, justifyContent, alignItems }}
            values={items}
            onReorder={setItems}
            className="flex gap-1 min-h-[300px] flex-wrap border p-1"
          >
            <AnimatePresence>
              {items.map((item, i) => (
                <Reorder.Item
                  className="cursor-grab"
                  value={item}
                  key={item.id}
                >
                  <motion.div
                    layout={true}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 40,
                      y: { delay: i * 0.2, ease: "easeInOut" },
                      opacity: { delay: i * 0.2, ease: "easeInOut" },
                    }}
                    variants={box}
                    initial="hidden"
                    animate="visible"
                    className="bg-[rgb(255,250,240,0.6)] backdrop-blur border dark:bg-opacity-40  dark:bg-slate-500 p-2 rounded-md"
                  >
                    <motion.p layout="position"> {item.label} </motion.p>
                  </motion.div>
                </Reorder.Item>
              ))}
            </AnimatePresence>
          </Reorder.Group>
        </LayoutGroup>
      ) : (
        <div
          style={{ flexDirection, justifyContent, alignItems }}
          className="flex gap-1 min-h-[300px] flex-wrap border p-1"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              layout={true}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 40,
                y: { delay: i * 0.2, ease: "easeInOut" },
                opacity: { delay: i * 0.2, ease: "easeInOut" },
              }}
              variants={box}
              initial="hidden"
              animate="visible"
              className="bg-[rgb(255,250,240,0.6)]  backdrop-blur 
              dark:bg-opacity-40  border dark:bg-slate-500 p-2 rounded-md"
            >
              <motion.p layout="position"> {item.label} </motion.p>
            </motion.div>
          ))}
        </div>
      )}
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
    </motion.section>
  );
}

function SelectControl({ label, value, onChange, ...delegated }: any) {
  const id = React.useId();

  return (
    <div className="rounded-e-lg flex-wrap flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <select
        className="text-xs p-2 dark:bg-slate-900 bg-slate-200 border  rounded-sm"
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
    label: "👨‍💻  Open Source Contributor",
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
    label: "❔  Whovian",
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
