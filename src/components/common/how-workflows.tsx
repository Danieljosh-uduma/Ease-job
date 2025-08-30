import {
	HowWorkflowTriggerStyle,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import WorkflowIcon1 from "@/assets/work-flow-icon-1.svg?react";
import WorkflowIcon2 from "@/assets/work-flow-icon-2.svg?react";
import WorkflowIcon3 from "@/assets/work-flow-icon-3.svg?react";
import WorkflowIcon4 from "@/assets/work-flow-icon-4.svg?react";
import Arrow5 from "@/assets/Arrow5.svg?react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { motion } from "motion/react";

export function HowWorkFlows() {
	type workflowItemsTypes = {
		icon: React.ReactNode;
		title: string;
		description: string;
	};

	const employerItems: workflowItemsTypes[] = [
		{
			icon: <WorkflowIcon1 />,
			title: "Sign Up or Log In",
			description: "Get started quickly and access your account.",
		},
		{
			icon: <WorkflowIcon2 />,
			title: "Post a Job",
			description: "Add details to attract the right candidates.",
		},
		{
			icon: <WorkflowIcon3 />,
			title: "Find the Right Talent",
			description: "Browse verified candidates with filters.",
		},
		{
			icon: <WorkflowIcon4 />,
			title: "Hire with Confidence",
			description: "Interview candidates and make trusted hires.",
		},
	];

	const jobSeekerItems: workflowItemsTypes[] = [
		{
			icon: <WorkflowIcon1 />,
			title: "Sign Up or Log In",
			description: "Get started quickly and access your account.",
		},
		{
			icon: <WorkflowIcon2 />,
			title: "Showcase Your Skills",
			description: "Upload your CV and highlight your experience",
		},
		{
			icon: <WorkflowIcon3 />,
			title: "Find Opportunities",
			description: "Browse jobs or gigs that match your skills",
		},
		{
			icon: <WorkflowIcon4 />,
			title: "Grow Your Career",
			description: "Complete jobs, get verified, and strengthen your profile.",
		},
	];

	return (
		<div className="w-[90%] max-w-7xl mx-auto space-y-14">
			<h1 className="text-4xl font-semibold text-center max-lg:text-2xl">
				How It Works
			</h1>

			<Tabs defaultValue="job-seekers">
				<TabsList className="mx-auto w-full max-w-2/5 bg-background border max-lg:max-w-full">
					<TabsTrigger value="job-seekers" className={HowWorkflowTriggerStyle}>
						Job Seekers
					</TabsTrigger>
					<TabsTrigger
						value="employers/agents"
						className={HowWorkflowTriggerStyle}
					>
						Employers & Agents
					</TabsTrigger>
				</TabsList>

				<TabsContent value="job-seekers" className="mt-5 overflow-hidden">
					<ScrollArea className="w-full overflow-x-hidden">
						<motion.div
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1 }}
							className="flex justify-center items-center gap-4 whitespace-nowrap"
						>
							{employerItems.map((item, index) => (
								<>
									<Card className="flex w-[237px] h-[225px]">
										<CardHeader>
											<CardTitle className="flex flex-col items-center gap-10">
												{item.icon}
												{item.title}
											</CardTitle>
											<CardDescription className="text-center text-wrap">
												{item.description}
											</CardDescription>
										</CardHeader>
									</Card>

									{index !== employerItems.length - 1 && <Arrow5 />}
								</>
							))}
						</motion.div>
						<ScrollBar orientation="horizontal" />
					</ScrollArea>
				</TabsContent>
				<TabsContent value="employers/agents" className="mt-5">
					<ScrollArea className="w-full overflow-x-auto">
						<motion.div
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1 }}
							className="flex justify-center items-center gap-4 whitespace-nowrap"
						>
							{jobSeekerItems.map((item, index) => (
								<>
									<Card className="flex w-[237px] h-[225px]">
										<CardHeader>
											<CardTitle className="flex flex-col items-center gap-10">
												{item.icon}
												{item.title}
											</CardTitle>
											<CardDescription className="text-center text-wrap">
												{item.description}
											</CardDescription>
										</CardHeader>
									</Card>

									{index !== jobSeekerItems.length - 1 && <Arrow5 />}
								</>
							))}
						</motion.div>
						<ScrollBar orientation="horizontal" />
					</ScrollArea>
				</TabsContent>
			</Tabs>
		</div>
	);
}
