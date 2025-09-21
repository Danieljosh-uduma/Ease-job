import { createContext } from "react";

type Role = "job-seeker" | "employer" | "agent" | null;

type SignUpProviderState = {
	selectedRole: Role;
	setSelectedRole: (selectedRole: Role) => void;
};

const initialState: SignUpProviderState = {
	selectedRole: null,
	setSelectedRole: () => null,
};

export const SignupContext = createContext<SignUpProviderState>(initialState);
