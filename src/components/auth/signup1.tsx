import SignUp1Item from "../widgets/signup1-items";
import JobSeekerIcon from "@/assets/job-seekericon.svg?react";
import EmployerAgent from "@/assets/employer-agent (1).svg?react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { UseSignup } from "@/hooks";
import type { Role } from "@/contexts/sign-up-provider";

function SignUp1() {
	const { selectedRole, setSelectedRole } = UseSignup();
	const navigate = useNavigate();

	console.log(selectedRole);
	const roles = [
		{
			id: "employer",
			title: "Employer",
			description: "Hire the right talent quickly",
			icon: <EmployerAgent />,
		},
		{
			id: "job-seeker",
			title: "Job Seeker",
			description: "Find verified opportunities faster",
			icon: <JobSeekerIcon />,
		},

		{
			id: "agent",
			title: "Agent",
			description: "Connect job seekers with employers",
			icon: <EmployerAgent />,
		},
	];

	const handleRoleSelect = (roleId: Role) => {
		console.log("role Selected: ", roleId);
		setSelectedRole(roleId);
	};

	const handleContinue = () => {
		if (selectedRole) {
			navigate("/signup/details");
		}
	};

	const handleLogin = () => {
		alert("Navigate to login page");
	};

	return (
		<div className="min-h-full">
			{/* Main Content */}
			<div className="px-6 py-6 sm:px-6 sm:py-8">
				{/* Title */}
				<div className="mb-8 sm:mb-12 text-center">
					<h1 className="text-2xl sm:text-3xl font-semibold ">
						Join as a Job Seeker, Employer or Agent
					</h1>
				</div>

				{/* Role Selection */}
				<div className="mb-8 sm:mb-10 max-w-3xl sm:mx-auto">
					{/* Mobile: Radio-style list */}
					<div className="block sm:hidden space-y-3">
						{roles.map((role) => (
							<SignUp1Item
								key={role.id}
								id={role.id}
								title={role.title}
								description={role.description}
								selected={selectedRole === role.id}
								onSelect={handleRoleSelect}
							/>
						))}
					</div>

					{/* Desktop: Card grid with icons */}
					<div className="hidden sm:grid sm:grid-cols-3 gap-4">
						{roles.map((role) => (
							<SignUp1Item
								key={role.id}
								id={role.id}
								title={role.title}
								description={role.description}
								icon={role.icon}
								selected={selectedRole === role.id}
								onSelect={handleRoleSelect}
							/>
						))}
					</div>
				</div>

				{/* Continue Button */}
				<div className="max-w-xl mx-auto">
					<Button
						size="lg"
						className="w-full cursor-pointer"
						disabled={selectedRole == null}
						onClick={handleContinue}
					>
						<Link to="#">Continue</Link>
					</Button>

					{/* Login Link */}
					<div className="flex items-center justify-center gap-2 mt-6">
						<span>Already have an account?</span>
						<Button
							variant="link"
							size="sm"
							className="p-0 h-auto"
							onClick={handleLogin}
						>
							Log In
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignUp1;
