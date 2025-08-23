import {
	HomeHero,
	HowWorkFlows,
	TargetCustomer,
	Testimonials,
	WhyEaseJob,
	CTA,
} from "@/components/common";

import { RootLayout } from "@/components/layout";

export function HomePage() {
	return (
		<RootLayout>
			<HomeHero />
			<TargetCustomer />
			<WhyEaseJob />
			<HowWorkFlows />
			<Testimonials />
			<CTA/>
		</RootLayout>
	);
}
