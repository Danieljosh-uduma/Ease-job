import { motion } from "motion/react";
import { TestimonialItems } from "../widgets/testimonial-items";

export function Testimonials() {
	// sample data
	const items: {
		comment: string;
		avatarUrl: string;
		name: string;
	}[] = Array.from({ length: 10 }, () => {
		return {
			comment:
				"I finally get gigs that actually match my skills. Makes my life so much easier!",
			avatarUrl: "https://github.com/john-keno.png",
			name: "John Iweh",
		};
	});

	return (
		<div className="w-full mx-auto space-y-10 max-w-screen bg-warning-light">
			<h1 className="text-4xl font-semibold text-center p-5 max-lg:text-2xl">
				Trusted by Thousands Here’s Why
			</h1>

			<div className="w-full overflow-hidden pb-10 mx-auto mask-x-from-90% mask-x-to-100% bg-warning-light">
				<motion.div className="grid grid-rows-2 grid-flow-col gap-4 max-lg:grid-rows-1 ">
					<TestimonialItems items={items} from={0} to={"-100%"} speed={60} />
					<TestimonialItems items={items} from={"-100%"} to={0} speed={60} />
				</motion.div>
			</div>
		</div>
	);
}
