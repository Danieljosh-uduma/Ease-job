import { Navbar, Footer } from "@/components/common";
import { MobileMenu } from "../widgets/mobile-menu-items";

export function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<main className="space-y-24 ">{children}</main>
			<Footer />
		</>
	);
}
