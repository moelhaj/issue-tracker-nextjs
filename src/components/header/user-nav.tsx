"use client";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/features/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import * as React from "react";
import { MoonIcon, SunIcon, BellIcon, ExitIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { redirect } from "next/navigation";

export function UserNav() {
	const dispatch = useDispatch();
	const { setTheme, theme } = useTheme();
	const { user } = useSelector((state: any) => state.user);

	if (!user) {
		redirect("/");
	}

	console.log(theme);

	return (
		<nav className="flex items-center space-x-5">
			{/* notifications */}
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline" size="icon" className="relative">
						<BellIcon />
						<div className="absolute -right-1 -top-1 z-10">
							<span className="relative flex h-2 w-2">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75"></span>
								<span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500"></span>
							</span>
						</div>
						<span className="sr-only">notifications</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
			{/* user */}
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline" className="h-9 w-9" size="icon">
						<Avatar className="h-7 w-7">
							<AvatarImage src="/avatar.png" alt="avatar" />
							<AvatarFallback>
								{user.name.split("")[0].charAt(0).toUpperCase()}
								{user.name.split("")[1].charAt(0).toUpperCase()}
							</AvatarFallback>
						</Avatar>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56" align="end" forceMount>
					<DropdownMenuLabel className="font-normal">
						<div className="flex flex-col space-y-1">
							<p className="text-sm font-medium leading-none">{user.name}</p>
							<p className="text-xs leading-none text-muted-foreground">
								{user.email}
							</p>
						</div>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem
							onClick={() => setTheme(theme === "light" ? "dark" : "light")}
						>
							Dark Mode
							<DropdownMenuShortcut>
								{theme === "light" ? <MoonIcon /> : <SunIcon />}
							</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem onClick={() => dispatch(logout())}>
						Logout
						<DropdownMenuShortcut>
							<ExitIcon />
						</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</nav>
	);
}
