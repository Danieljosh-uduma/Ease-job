import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LuMoveRight } from "react-icons/lu";

export function CTA() {
	return (
		<div className="my-20">
			<Card className="text-center justify-center items-center mx-auto p-10 w-4/5 h-fit max-w-[1162px] bg-secondary max-lg:p-5 max-lg:w-11/12">
				<CardContent className="text-background font-semibold text-4xl px-20 space-y-10 max-lg:text-2xl max-lg:px-1">
					<p className="text-wrap w-full">
						Join Thousands Building Careers, Teams & Connections
					</p>

					<CardFooter>
						<Button size={"lg"} className="bg-background mx-auto text-black hover:bg-accent/80">
							Get Started
							<LuMoveRight />
						</Button>
					</CardFooter>
				</CardContent>
			</Card>
		</div>
	);
}
