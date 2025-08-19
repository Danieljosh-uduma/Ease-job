import { Link } from "react-router";
import "./App.css";
import { ThemeProvider } from "@/contexts/theme-provider";
import { Button } from "./components/ui/button";
import { ArrowRight } from "lucide-react";
import { ModeToggle } from "@/components/widgets";
import { Navbar } from "@/components/common";

function App() {
	return (
		<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			<Navbar />
			<div className="justify-center items-center flex flex-col h-screen">
				<h1 className="text-2xl font-bold">Welcome to Ease Job</h1>
				<p className="text-lg">Your job search made easy!</p>
				<Button asChild>
					<Link to={"login"}>
						click to nav to login
						<ArrowRight />
					</Link>
				</Button>

				<ModeToggle />
			</div>
		</ThemeProvider>
	);
}

export default App;
