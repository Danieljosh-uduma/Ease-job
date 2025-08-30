import { Navbar, Footer } from "@/components/common";

export function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<main className="space-y-24 max-lg:space-y-12">{children}</main>
			<Footer />
		</>
	);
}
