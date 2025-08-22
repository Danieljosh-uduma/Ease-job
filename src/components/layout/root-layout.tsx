import { Navbar } from "@/components/common";

export function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<main className="space-y-10 ">{children}</main>
            {/*Todo: Add footer component here*/}
		</>
	);
}
