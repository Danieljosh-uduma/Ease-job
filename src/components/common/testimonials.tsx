import { animate, motion, useMotionValue } from "motion/react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { LuUser } from "react-icons/lu";

export function Testimonials() {
	const items: string[] = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`);
	const [ref, { width }] = useMeasure();

	const FAST_DURATION = 10;
	const SLOW_DURATION = 75;

	const [duration, setDuration] = useState(FAST_DURATION);
	const xTranslation = useMotionValue(0);

	const [mustFinish, setMustFinish] = useState(false);
	const [rerender, setRerender] = useState(false);

	useEffect(() => {
		let controls;
		const finalPosition = -width / 2 - 8;

		if (mustFinish) {
			controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
				ease: "linear",
				duration: duration * (1 - xTranslation.get() / finalPosition),
				onComplete: () => {
					setMustFinish(false);
					setRerender(!rerender);
				},
			});
		} else {
			controls = animate(xTranslation, [0, finalPosition], {
				ease: "linear",
				duration: duration,
				repeat: Infinity,
				repeatType: "loop",
				repeatDelay: 0,
			});
		}

		return controls?.stop;
	}, [rerender, xTranslation, duration, width, mustFinish]);

	return (
		<div className="w-full mx-auto space-y-10 max-w-7xl bg-warning-light">
			<h1 className="text-4xl font-semibold text-center p-5">
				Trusted by Thousands Here’s Why
			</h1>

			<div className="w-4/5 overflow-hidden pb-10 mx-auto bg-warning-light">
				<motion.div
					style={{ x: xTranslation }}
					ref={ref}
					onHoverStart={() => {
						setMustFinish(true);
						setDuration(SLOW_DURATION);
					}}
					onHoverEnd={() => {
						setMustFinish(true);
						setDuration(FAST_DURATION);
					}}
					className="grid grid-rows-2 grid-flow-col gap-4"
				>
					{[...items, ...items].map((i) => (
						<Card key={i} className="w-56 max-w-xs">
							<CardContent className="">
								<p>
									"I finally get gigs that actually match my skills. Makes my
									life so much easier!"
								</p>
							</CardContent>
							<CardFooter className="gap-2">
								<LuUser />
								<CardTitle>Chike Obi</CardTitle>
							</CardFooter>
						</Card>
					))}
				</motion.div>
			</div>
		</div>
	);
}
