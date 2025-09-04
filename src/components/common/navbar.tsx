import { Link } from "react-router";
import { MenuItems, NavLogo } from "../widgets";
import { Button } from "../ui/button";
import { useState } from "react";

export function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
    <div className="sticky top-0 flex justify-between w-full p-3 z-[100000] backdrop-blur-xs bg-muted/40">
      <NavLogo isOpen={menuOpen} onClickMenu={() => setMenuOpen(!menuOpen)} />
      <MenuItems />
      <div className="flex gap-2">
        <Button asChild>
          <Link to="/login">Sign Up</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/login" className="max-lg:hidden">
            Login
          </Link>
        </Button>
      </div>
    </div>
  );
} 
