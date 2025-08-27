import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export function CTA() {
	return (
		<div className="my-auto">
			<Card className="text-center justify-center items-center mx-auto p-10 w-4/5 h-fit max-w-[1162px] bg-secondary">
				<CardContent className="text-background font-semibold text-4xl px-20 space-y-10">
					<p className="text-wrap">
						Join Thousands Building Careers, Teams & Connections
					</p>

					<CardFooter>
						<Button size={"lg"} className="bg-background mx-auto text-black hover:bg-accent/80">
							Get Started
							<MoveRight />
						</Button>
					</CardFooter>
				</CardContent>
			</Card>
		</div>
	);
}
