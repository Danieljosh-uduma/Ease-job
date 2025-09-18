import hero from "@/assets/hero.jpg";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
	HeroTabsTriggerStyle,
} from "@/components/ui/tabs";
import { SearchBar } from "@/components/widgets/search-bar";

export function HomeHero() {
	const suggestionsItems: string[] = [
		"Software Engineer",
		"Data Scientist",
		"Product Manager",
		"UX Designer",
		"Marketing Specialist",
	];

	return (
		<div className="relative w-full h-[120vh] max-lg:h-[80vh] max-h-[803px] flex flex-col py-20">
			<img
				src={hero}
				alt="Employees at work place"
				className="absolute inset-0 object-cover object-center z-0 w-full h-full max-lg:h-[60%] max-w-[2560px] mx-auto"
			/>
			<div className="flex flex-col w-4/5 mx-auto h-full">
				<div className="flex w-full mx-auto justify-center backdrop-blur-[2px] p-14 mb-auto max-lg:p-6">
					<h1 className="w-full max-w-6xl text-5xl text-center drop-shadow-xs drop-shadow-black text-wrap font-bold text-white max-lg:font-bold max-lg:text-2xl">
						Connecting Talent, Employers, and <br className="max-lg:hidden" />
						Trusted Agents. All in One Place
					</h1>
				</div>
				<div className="relative bg-black/50 p-4 rounded-lg w-4/5 max-lg:w-full max-w-2xl mt-auto mx-auto">
					<Tabs defaultValue="find-talent" className="w-full max-w-2xl">
						<div className=" mx-auto w-[90%] max-lg:w-full py-10 max-lg:py-5">
							<TabsList className="rounded-b-none rounded-t-md bg-accent p-0 m-0 w-full">
								<TabsTrigger
									value="find-talent"
									className={HeroTabsTriggerStyle}
								>
									Find Talent
								</TabsTrigger>
								<TabsTrigger
									value="browse-jobs"
									className={HeroTabsTriggerStyle}
								>
									Browse Jobs
								</TabsTrigger>
							</TabsList>
						</div>

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
