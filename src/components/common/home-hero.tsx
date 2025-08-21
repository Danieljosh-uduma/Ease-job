import hero from "@/assets/hero.jpg";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
	HeroTabsTriggerStyle,
} from "../ui/tabs";
import { SearchBar } from "../widgets/search-bar";

export function HomeHero() {
	const suggestionsItems: string[] = [
		"Software Engineer",
		"Data Scientist",
		"Product Manager",
		"UX Designer",
		"Marketing Specialist",
	];

	return (
		<div className="relative w-full h-[80vh] justify-center items-center flex flex-col px-10 pt-10">
			<img
				src={hero}
				alt="Employees at work place"
				className="absolute inset-0 object-cover -z-10 w-full h-full"
			/>
			<div className="flex flex-col w-4/5 h-[80%] items-center justify-around">
				<div className="flex w-full justify-center backdrop-blur-[2px] p-14">
					<h1 className="w-full max-w-6xl text-5xl text-center drop-shadow-2xl drop-shadow-gray-500 text-wrap font-bold text-white">
						Connecting Talent, Employers, and <br className="max-lg:hidden" />{" "}
						Trusted Agents. All in One Place
					</h1>
				</div>
				<div className="relative bg-black/50 p-4 rounded-lg w-4/5 max-w-2xl">
					<Tabs defaultValue="find-talent" className="w-full max-w-2xl">
						<TabsList className="rounded-b-none rounded-t-md bg-accent p-0 m-0 w-full">
							<TabsTrigger value="find-talent" className={HeroTabsTriggerStyle}>
								Find Talent
							</TabsTrigger>
							<TabsTrigger value="browse-jobs" className={HeroTabsTriggerStyle}>
								Browse Jobs
							</TabsTrigger>
						</TabsList>
						<TabsContent value="find-talent">
							<SearchBar
								placeholder="Search by role, skills, or keywords"
								suggestions={suggestionsItems}
								onSubmit={(e) => {
									e.preventDefault();
									console.log("submitted");
								}}
							/>
						</TabsContent>
						<TabsContent value="browse-jobs">
							<SearchBar
								placeholder="Search by role, skills, or keywords"
								suggestions={suggestionsItems}
								onSubmit={(e) => {
									e.preventDefault();
									console.log("submitted");
								}}
							/>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</div>
	);
}
