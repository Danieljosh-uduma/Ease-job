import { AuthLayout } from "@/components/layout";
import { Outlet } from "react-router";

export function SignupPage() {
	return (
		<AuthLayout>
			<Outlet />
		</AuthLayout>
	);
}
