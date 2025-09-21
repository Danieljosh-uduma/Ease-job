/// <reference types="vite-plugin-svgr/client" />

import "./App.css";
import { ThemeProvider } from "@/contexts/theme-provider";
import AppRouter from "./router";
import { AnimatePresence } from "motion/react";
import { SignupProvider } from "./contexts/sign-up-provider";

function App() {
	return (
		<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			<SignupProvider>
				<AnimatePresence>
					<AppRouter />
				</AnimatePresence>
			</SignupProvider>
		</ThemeProvider>
	);
}

export default App;
