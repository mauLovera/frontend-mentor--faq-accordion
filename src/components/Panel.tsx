"use client"
import { useState } from "react"

import type { Panel } from "@/components/Accordion"
import ToggleIcon from "@/components/icons/ToggleIcon"

export default function Panel({ heading, text, defaultOpen }: Panel) {
  const [open, setOpen] = useState(!!defaultOpen)

  return (
    <section className="sm:mx-[42px] sm:py-6 mx-6 overflow-hidden border-b border-light-pink py-5 last-of-type:border-none last-of-type:pb-0">
      <header
        className={
          "sm:gap-8 group flex cursor-pointer items-center justify-between gap-6"
        }
        onClick={() => setOpen(!open)}
      >
        <h2 className="text-base sm:text-lg font-semibold text-dark-purple transition-colors duration-300 group-hover:text-bright-purple">
          {heading}
        </h2>
        <button
          className="grid self-center focus:rounded-full focus:outline-bright-purple"
          aria-label="accordion panel expand"
        >
          <span
            style={{ gridColumn: 1, gridRow: 1 }}
            className={`transition-all duration-300`}
          >
            <ToggleIcon open={open} />
          </span>
        </button>
      </header>
      <p
        className={`${
          open ? "h-auto pt-6 opacity-100" : " h-0 opacity-0"
        } text-sm sm:text-base leading-normal text-grayish-purple transition-all duration-300`}
      >
        {text}
      </p>
    </section>
  )
}
