import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export function CTA() {
	return (
		<div>
			<Card className="text-center justify-center items-center mx-auto p-10 w-4/5 h-fit bg-secondary">
				<CardContent className="text-background font-semibold text-4xl space-y-10">
					<p className="">
						Join Thousands Building Careers, Teams & Connections
					</p>

					<CardFooter>
						<Button size={"lg"} className="bg-background mx-auto text-black">
							Get Started
							<MoveRight />
						</Button>
					</CardFooter>
				</CardContent>
			</Card>
		</div>
	);
}
