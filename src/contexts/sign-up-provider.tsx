import { SignupContext } from "@/lib/auth-context";
import { useState } from "react";

export type Role = "job-seeker" | "employer" | "agent" | null;

type SignupContextProvidersProps = {
	children: React.ReactNode;
	storageKey?: string;
};

export const SignupProvider = ({
	children,
	storageKey = "user-role",
	...props
}: SignupContextProvidersProps) => {
	const [selectedRole, setSelectedRole] = useState<Role>(
		() => (sessionStorage.getItem(storageKey) as Role) || null
	);

	const value = {
		selectedRole,
		setSelectedRole: (role: Role) => {
			sessionStorage.setItem(storageKey, role as string);
			setSelectedRole(role);
		},
	};

	return (
		<SignupContext.Provider {...props} value={value}>
			{children}
		</SignupContext.Provider>
	);
};
