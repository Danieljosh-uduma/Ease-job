import "./App.css";
import { ThemeProvider } from "./components/theme-provider";

function App() {
	return (
		<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			<div className="justify-center items-center flex flex-col h-screen">
				<h1 className="text-2xl font-bold">Welcome to Ease Job</h1>
				<p className="text-lg">Your job search made easy!</p>
			</div>
		</ThemeProvider>
	);
}

export default App;
