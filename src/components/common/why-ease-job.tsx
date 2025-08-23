import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MoveRight } from "lucide-react";
import Group3Icon from "@/assets/group_3_line.svg?react";

export function WhyEaseJob() {
	return (
		<div className="flex flex-col items-center w-[90%] max-w-7xl h-screen mx-auto">
			<h1 className="text-4xl font-semibold text-center">
				Connecting People. Creating Opportunities
			</h1>
			<div className="flex justify-between w-full p-10">
				{/**Left Item */}
				<div className="w-2/5 space-y-20 p-20 mt-20">
					<p className="text-wrap text-muted-foreground">
						Finding work or talent should feel easy, not exhausting. That’s why
						EaseJob connects you with the right people quickly, clearly, and
						with zero fuss.
					</p>
					<Button asChild>
						<Link to="#">
							Get Started
							<MoveRight />
						</Link>
					</Button>
				</div>

				{/**Right Items */}
				<div className="grid grid-cols-2 gap-6 w-1/2 mx-auto">
					<Card className="bg-primary gap-5 text-white max-w-80 ">
						<CardHeader className="gap-5">
							<CardTitle className="space-y-5">
								<Group3Icon />
								<h1 className="text-white text-xl">Built for Everyone</h1>
							</CardTitle>
							<CardContent className="w-full px-0">
								<p className="text-wrap">
									From skilled artisans and experienced professionals to
									recruiters and agents, our tools are designed to work for all.
								</p>
							</CardContent>
						</CardHeader>
					</Card>
					{/**right Items white */}
					<Card className="gap-5 max-w-80 ">
						<CardHeader className="gap-5">
							<CardTitle className="space-y-5">
								<Group3Icon />
								<h1 className="text-xl">Built for Everyone</h1>
							</CardTitle>
							<CardContent className="w-full px-0">
								<p className="text-wrap">
									From skilled artisans and experienced professionals to
									recruiters and agents, our tools are designed to work for all.
								</p>
							</CardContent>
						</CardHeader>
					</Card>
					<Card className="gap-5 max-w-80 ">
						<CardHeader className="gap-5">
							<CardTitle className="space-y-5">
								<Group3Icon />
								<h1 className="text-xl">Built for Everyone</h1>
							</CardTitle>
							<CardContent className="w-full px-0">
								<p className="text-wrap">
									From skilled artisans and experienced professionals to
									recruiters and agents, our tools are designed to work for all.
								</p>
							</CardContent>
						</CardHeader>
					</Card>
					<Card className="gap-5 max-w-80 ">
						<CardHeader className="gap-5">
							<CardTitle className="space-y-5">
								<Group3Icon />
								<h1 className="text-xl">Built for Everyone</h1>
							</CardTitle>
							<CardContent className="w-full px-0">
								<p className="text-wrap">
									From skilled artisans and experienced professionals to
									recruiters and agents, our tools are designed to work for all.
								</p>
							</CardContent>
						</CardHeader>
					</Card>
				</div>
			</div>
		</div>
	);
}
