import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			mobile: "375px"
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
	},
	plugins: [],
}
export default config
