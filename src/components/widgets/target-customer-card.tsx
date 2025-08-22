import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { getImageUrl } from "@/lib/utils";

export type TargetCustomerProps = {
	title?: string;
	description?: string;
	backgroundImg?: string;
	goto?: () => void;
};

export function TargetCustomerCard(props: TargetCustomerProps) {
	const { title, description, backgroundImg, goto } = props;

	return (
		<Card
			className={
				"relative h-full max-h-[600px] max-w-7xl items-center justify-center m-auto"
			}
		>
			<div className="flex flex-col w-1/2 items-center text-white text-center text-wrap gap-8 h-full p-10 my-80 backdrop-blur-[2px] z-50 ">
				<CardTitle>
					<h1 className="text-4xl">{title}</h1>
				</CardTitle>
				<CardContent className="mx-auto">{description}</CardContent>
				<CardFooter className="w-full">
					<Button
						variant={"secondary"}
						size={"lg"}
						onClick={goto}
						className="w-1/2 mx-auto cursor-pointer"
					>
						Get Started
						<MoveRight />
					</Button>
				</CardFooter>
			</div>

			<img
				src={getImageUrl(backgroundImg || "employers.png")}
				alt="test"
				className="absolute w-full h-full object-cover object-top rounded-xl"
			/>
		</Card>
	);
}
