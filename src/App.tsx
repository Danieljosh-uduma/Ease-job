import { Link } from "react-router";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import { ArrowRight } from "lucide-react";

function App() {
	return (
		<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			<div className="justify-center items-center flex flex-col h-screen">
				<h1 className="text-2xl font-bold">Welcome to Ease Job</h1>
				<p className="text-lg">Your job search made easy!</p>
				<Button asChild>
					<Link to={"login"}>
						click to nav to login
						<ArrowRight />
					</Link>
				</Button>
			</div>
		</ThemeProvider>
	);
}

export default App;
