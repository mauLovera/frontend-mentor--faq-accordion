import Panel from "@/components/Panel"
import StarIcon from "@/components/icons/StarIcon"

export interface Panel {
  heading: string
  text: string
  defaultOpen?: boolean
}

const panels: Panel[] = [
  {
    heading: "What is Frontend Mentor, and how will it help me?",
    text: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    defaultOpen: true,
  },
  {
    heading: "Is Frontend Mentor free?",
    text: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    heading: "Can I use Frontend Mentor projects in my portfolio?",
    text: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    heading: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    text: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
]

export default function Accordion() {
  return (
    <section className="sm:py-10 max-w-[600px] rounded-2xl bg-white py-6 shadow-3xl shadow-grayish-purple/25">
      <header className="sm:px-[42px] flex items-center gap-6 px-6">
        <StarIcon />
        <h1 className="text-3xl sm:text-6xl sm:leading-[1.17] font-bold leading-[1.17] text-dark-purple">
          FAQs
        </h1>
      </header>
      {panels.map(({ heading, text, defaultOpen }, index) => (
        <Panel
          heading={heading}
          text={text}
          defaultOpen={defaultOpen}
          key={index}
        />
      ))}
    </section>
  )
}
