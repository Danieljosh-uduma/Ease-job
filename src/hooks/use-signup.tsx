import { SignupContext } from "@/lib/auth-context";
import { useContext } from "react";

export function UseSignup() {
	const context = useContext(SignupContext);

	if (context === undefined)
		throw new Error("useSignup must be used within a SignupProvider");
	return context;
}
