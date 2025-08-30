import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { LuMoveRight } from "react-icons/lu";
import Group3Icon from "@/assets/group_3_line.svg?react";

export function WhyEaseJob() {
	return (
		<div className="flex flex-col items-center w-[90%] max-w-7xl mx-auto">
			<h1 className="text-4xl font-semibold text-center max-lg:text-2xl">
				Connecting People. <br className="hidden max-lg:block" />
				Creating Opportunities
			</h1> 
			<div className="flex justify-between w-full mx-auto p-10 max-lg:flex-col-reverse max-lg:p-5 ">
				{/**Left Item */}
				<div className="w-2/5 space-y-20 p-20 mt-20 max-lg:space-y-0 max-lg:w-full max-lg:mt-0 max-lg:p-10">
					<p className="text-wrap text-muted-foreground max-lg:hidden">
						Finding work or talent should feel easy, not exhausting. That’s why
						EaseJob connects you with the right people quickly, clearly, and
						with zero fuss.
					</p>
					<Button size={"lg"} asChild className="max-lg:w-full">
						<Link to="#">
							Get Started
							<LuMoveRight />
						</Link>
					</Button>
				</div>

				{/**Right Items */}
				<div className="grid grid-cols-2 gap-6 w-1/2 mx-auto max-lg:grid-cols-1 max-lg:w-full">
					<Card className="bg-primary gap-5 max-lg:order-2 text-white">
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
					<Card className="gap-5 max-lg:order-1 ">
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
					<Card className="gap-5 max-lg:order-3 ">
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
					<Card className="gap-5 max-lg:order-4">
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
