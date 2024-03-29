import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			mobile: "375px",
		},
		colors: {
			white: "hsl(0, 0%, 100%)",
			"bright-purple": "hsl(281, 87%, 54%)",
			"light-pink": "hsl(275, 100%, 97%)",
			"grayish-purple": "hsl(292, 16%, 49%)",
			"dark-purple": "hsl(292, 42%, 14%)",
		},
		backgroundImage: {
			desktop: "url('/assets/images/background-pattern-desktop.svg')",
			mobile: "url('/assets/images/background-pattern-mobile.svg')",
		},
		fontSize: {
			h1: "56px",
			h2: "18px",
		},
		extend: {
			boxShadow: {
				"3xl": "0 35px 60px 0px rgba(0, 0, 0, 0.3)",
			},
		},
	},
	plugins: [],
}
export default config
