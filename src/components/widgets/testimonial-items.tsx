import { motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export type TestimonialItemsProps = {
	items: {
		comment: string;
		avatarUrl: string;
		name: string;
	}[];
	from: number | string;
	to: number | string;
	speed?: number;
};

export function TestimonialItems({
	items,
	from,
	to,
	speed = 60,
	...props
}: TestimonialItemsProps & React.ComponentProps<"div">) {
	const [isPaused, setIsPaused] = useState(false);

	const controls1 = useAnimation();
	const controls2 = useAnimation();

	useEffect(() => {
		if (isPaused === false) {
			controls1.start({
				x: to,
				transition: {
					duration: speed,
					repeat: Infinity,
					repeatDelay: 0,
					ease: "linear",
				},
			});

			controls2.start({
				x: to,
				transition: {
					duration: speed,
					repeat: Infinity,
					repeatDelay: 0,
					ease: "linear",
				},
			});
		} else {
			controls1.stop();
			controls2.stop();
		}
	}, [isPaused, controls1, controls2, to, speed]);

	return (
		<div className="flex">
			<motion.div
				initial={{ x: `${from}` }}
				animate={controls1}
				onHoverStart={() => setIsPaused(true)}
				onHoverEnd={() => setIsPaused(false)}
				className={`flex flex-shrink-0 gap-4 pl-4 ${props.className}`}
			>
				{items.map((item, index) => {
					return (
						<Card key={index} className="w-96 max-lg:w-60">
							<CardContent className="">
								<p>{item.comment}</p>
							</CardContent>
							<CardFooter className="gap-2">
								<Avatar>
									<AvatarImage src={item.avatarUrl} />
									<AvatarFallback>
										{item.name
											.split(" ")
											.map((name) => name[0].toUpperCase())
											.join("")}
									</AvatarFallback>
								</Avatar>
								<CardTitle>{item.name}</CardTitle>
							</CardFooter>
						</Card>
					);
				})}
			</motion.div>

			<motion.div
				initial={{ x: `${from}` }}
				animate={controls2}
				onHoverStart={() => setIsPaused(true)}
				onHoverEnd={() => setIsPaused(false)}
				className={`flex flex-shrink-0 gap-4 pl-4 ${props.className}`}
			>
				{items.map((item, index) => {
					return (
						<Card key={"l" + index} className="w-96 max-lg:w-60">
							<CardContent className="">
								<p>{item.comment}</p>
							</CardContent>
							<CardFooter className="gap-2">
								<Avatar>
									<AvatarImage src={item.avatarUrl} />
									<AvatarFallback>
										{item.name
											.split(" ")
											.map((name) => name[0].toUpperCase())
											.join("")}
									</AvatarFallback>
								</Avatar>
								<CardTitle>{item.name}</CardTitle>
							</CardFooter>
						</Card>
					);
				})}
			</motion.div>
		</div>
	);
}
