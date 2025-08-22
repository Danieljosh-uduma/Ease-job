import {
	HomeHero,
	HowWorkFlows,
	TargetCustomer,
	WhyEaseJob,
} from "@/components/common";
import { RootLayout } from "@/components/layout";

export function HomePage() {
	return (
		<RootLayout>
			<HomeHero />
			<TargetCustomer />
			<WhyEaseJob />
			<HowWorkFlows />
		</RootLayout>
	);
}
