import { useState } from "react";
import { LuMoveLeft } from "react-icons/lu";
import SignUp1Item from "../widgets/signup1-items";
import JobSeekerIcon from "@/assets/job-seekericon.svg?react";
import EmployerAgent from "@/assets/employer-agent (1).svg?react";
import { AppLogo } from "../logo/AppLogo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // ✅ using react-router Link

function SignUp1() {
  const [selectedRole, setSelectedRole] = useState("job-seeker");

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

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
  };

  const handleContinue = () => {
    if (selectedRole) {
      alert(`Selected role: ${selectedRole.replace("-", " ")}`);
      // Navigate to next page or submit form
    }
  };

  const handleLogin = () => {
    alert("Navigate to login page");
  };

  const handleBack = () => {
    alert("Navigate back");
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header>
        <div className="flex items-center gap-6 px-10 py-8">
          <button onClick={handleBack} className=" hover:text-gray-700">
            <LuMoveLeft size={24} />
          </button>
          <div className="flex items-center gap-2">
            <AppLogo />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-xl mx-auto px-6 mt-15">
        <h1 className="text-2xl font-semibold text-center mb-12">
          Join as a Job Seeker, Employer or Agent
        </h1>
      </div>
      {/* Role Selection Grid */}
      <div className="grid grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
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

      {/* Continue Button */}
      {/* Continue Button */}
      <div className="max-w-xl mx-auto ">
        <Button size="lg" asChild className="w-full" disabled={!selectedRole}>
          <Link to="#" onClick={handleContinue}>
            Continue
          </Link>
        </Button>

        {/* Login Link */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <span className="text-sm">Already have an account?</span>
          <Button
            variant="link"
            size="sm"
            className="p-0 h-auto"
            onClick={handleLogin}
          >
            Log in
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignUp1;
