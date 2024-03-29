"use client";
import { useState } from "react";

import type { Panel } from "@/components/Accordion";
import ToggleIcon from "@/components/icons/ToggleIcon";

export default function Panel({ heading, text, defaultOpen }: Panel) {
  const [open, setOpen] = useState(!!defaultOpen);

  return (
    <section className="overflow-hidden px-[42px] py-6">
      <header
        className={`group flex cursor-pointer items-center justify-between gap-12 mobile:gap-6`}
        onClick={() => setOpen(!open)}
      >
        <h2 className="text-h2 font-semibold text-dark-purple transition-colors duration-300 group-hover:text-bright-purple">
          {heading}
        </h2>
        <button className="grid self-start focus:rounded-full focus:outline-bright-purple">
          <span
            style={{ gridColumn: 1, gridRow: 1 }}
            className={`transition-all duration-300`}
          >
            <ToggleIcon open={open} />
          </span>
        </button>
      </header>
      <p
        className={`${open ? "h-auto pt-6 opacity-100" : " h-0 opacity-0"
          } text-grayish-purple transition-all duration-300`}
      >
        {text}
      </p>
    </section>
  );
}
