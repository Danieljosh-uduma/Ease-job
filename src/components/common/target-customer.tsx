import { useEffect, useMemo, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { TargetCustomerCard } from "@/components/widgets";



export function TargetCustomer() {
	const tabList = useMemo<string[]>(() => ["employers", "job-seekers", "agents"],[]);
	const [activeTab, setActiveTab] = useState<string>(tabList[0]);
	const tabContentList = useMemo(() => [
			{
				value: tabList[0],
				title: "Hire the Right Talent Fast.",
				description:
					"We connect you with skilled professionals ready to make an impact. Post jobs in minutes, manage applications with ease, and build the team you’ve been looking for without delays.",
				backgroundImg: "employers.png",
				goto: () => console.log("Go to Employers"),
			},
			{
				value: tabList[1],
				title: "Get Your Dream Job",
				description:
					"We connect you with employers and agents who value what you bring. Discover opportunities made for your skills, apply in a few clicks, and step into your next career move.",
				backgroundImg: "job-seekers.jpg",
				goto: () => console.log("Go to Job Seekers"),
			},
			{
				value: tabList[2],
				title: "Connect and Place Talent",
				description:
					"We give you the tools to match great candidates with the right employers. Build stronger connections, track your placements, and grow your success, all in one place.",
				backgroundImg: "agents.jpg",
				goto: () => console.log("Go to Agents"),
			},
		],
		[tabList]
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveTab((prev) => {
				const currentIndex = tabList.indexOf(prev);
				const nextIndex = (currentIndex + 1) % tabList.length;
				return tabList[nextIndex];
			});
		}, 3000);
		return () => clearInterval(interval);
	}, [tabList]);


	return (
		<div className="flex flex-col items-center gap-7 w-full">
			<h1 className="text-4xl font-semibold text-center">Built For You</h1>
			<Tabs
				value={activeTab}
				onValueChange={setActiveTab}
				className="w-full max-w-7xl"
			>
				<div className="flex justify-center w-full mb-5">
					<TabsList className="mx-auto w-1/2 max-w-3xl bg-warning-light">
						<TabsTrigger value="employers">Employers</TabsTrigger>
						<TabsTrigger value="job-seekers">Job Seekers</TabsTrigger>
						<TabsTrigger value="agents">Agents</TabsTrigger>
					</TabsList>
				</div>
				{tabContentList.map((item, index) => (
					<TabsContent
						key={item.value + index}
						value={item.value}
						className="w-full"
					>
						<TargetCustomerCard
							title={item.title}
							description={item.description}
							backgroundImg={item.backgroundImg}
							goto={item.goto}
						/>
					</TabsContent>
				))}
			</Tabs>
		</div>
	);
}
