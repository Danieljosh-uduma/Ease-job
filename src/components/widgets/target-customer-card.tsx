import { LuMoveRight } from "react-icons/lu";
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
				"relative h-full max-h-[600px] max-lg:h-[400px] max-w-7xl items-center justify-center m-auto"
			}
		>
			<div className="flex flex-col w-1/2 max-lg:w-full items-center text-white text-center text-wrap gap-8 h-full p-10 my-80 backdrop-blur-[2px] z-50 ">
				<CardTitle>
					<h1 className="text-4xl max-lg:text-lg">{title}</h1>
				</CardTitle>
				<CardContent className="mx-auto max-lg:text-xs">
					{description}
				</CardContent>
				<CardFooter className="w-full">
					<Button
						variant={"secondary"}
						size={"lg"}
						onClick={goto}
						className="mx-auto cursor-pointer max-lg:hidden"
					>
						Get Started
						<LuMoveRight />
					</Button>

					<Button
						variant={"secondary"}
						onClick={goto}
						className="mx-auto cursor-pointer hidden max-lg:flex"
					>
						Get Started
						<LuMoveRight />
					</Button>
				</CardFooter>
			</div>

			<img
				src={getImageUrl(backgroundImg!)}
				alt="test"
				className="absolute w-full h-full object-cover object-top rounded-xl"
			/>
		</Card>
	);
}
