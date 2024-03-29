export default function Home() {
	return (
		<main className="max-w-[600px] rounded-2xl bg-white p-[42px] py-8">
			<div className="flex items-center gap-6 pb-8">
				<img src="assets/images/icon-star.svg" alt="star symbol" className="h-10" />
				<h1 className="text-[56px] font-bold">FAQs</h1>
			</div>

			<section className="accordian">
				<div className="flex items-center justify-between group">
					<h2 className="font-semibold text-[18px] text-dark-purple group-hover:text-bright-purple">
						What is Frontend Mentor, and how will it help me?
					</h2>
					<img src="./assets/images/icon-plus.svg" alt="plus symbol within a circle" />
				</div>
				<p className="text-gray">
					Frontend Mentor offers realistic coding challenges to help developers improve their
					frontend coding skills with projects in HTML, CSS, and JavaScript. It0s suitable for all
					levels and ideal for portfolio building.
				</p>
			</section>
		</main>
	)
}
