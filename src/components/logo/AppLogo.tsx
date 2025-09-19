import { Link } from "react-router";
import Logo from "@/assets/logo.svg?react";

export function AppLogo() {
  return (
    <Link
      to="/"
      className="flex gap-2 items-center text-2xl font-bold text-primary transition-all duration-500"
    >
      <Logo className="h-8 w-8 hidden sm:block" />
      <p className="whitespace-nowrap">Ease Job</p>
    </Link>
  );
}
