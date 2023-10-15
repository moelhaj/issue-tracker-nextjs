"use client";

import { useEffect, useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserMenu() {
	const [darkMode, setDarkMode] = useState<boolean>();
	useEffect(() => {
		if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setDarkMode(true);
		} else {
			setDarkMode(false);
		}
	}, []);
	useEffect(() => {
		darkMode
			? document.documentElement.classList.add("dark")
			: document.documentElement.classList.remove("dark");
	}, [darkMode]);
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="outline-none">
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
					<AvatarFallback>ME</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Profile</DropdownMenuItem>
				<DropdownMenuItem>Billing</DropdownMenuItem>
				<DropdownMenuItem>Team</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setDarkMode(!darkMode)}>
					Dark Mode
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
