"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

export function MainNav() {
	const pathname = usePathname();
	const { role } = useSelector((state: any) => state.user);

	return (
		<div className="mr-4 hidden md:flex">
			{/* <Link href="/" className="mr-6 flex items-center space-x-2">
				<LayersIcon className="h-6 w-6" />
				<span className="hidden font-bold sm:inline-block"></span>
			</Link> */}
			<nav className="flex items-center space-x-6 text-sm font-medium">
				<Link
					href="/dashboard"
					className={cn(
						"transition-colors hover:text-blue-500",
						pathname?.startsWith("/dashboard")
							? "font-semibold text-blue-600"
							: "text-foreground/60"
					)}
				>
					Dashboard
				</Link>
				<Link
					href="/leads"
					className={cn(
						"transition-colors hover:text-blue-500",
						pathname?.startsWith("/leads")
							? "font-semibold text-blue-600"
							: "text-foreground/60"
					)}
				>
					Leads
				</Link>
				<Link
					href="/branches"
					className={cn(
						"transition-colors hover:text-blue-500",
						pathname?.startsWith("/branches")
							? "font-semibold text-blue-600"
							: "text-foreground/60"
					)}
				>
					Branches
				</Link>
				<Link
					href="/specialists"
					className={cn(
						"transition-colors hover:text-blue-500",
						pathname?.startsWith("/specialists")
							? "font-semibold text-blue-600"
							: "text-foreground/60"
					)}
				>
					Specialists
				</Link>
				{role === "admin" && (
					<Link
						href="/users"
						className={cn(
							"transition-colors hover:text-blue-500",
							pathname?.startsWith("/users")
								? "font-semibold text-blue-600"
								: "text-foreground/60"
						)}
					>
						Users
					</Link>
				)}
				{role === "admin" && (
					<Link
						href="/settings"
						className={cn(
							"transition-colors hover:text-blue-500",
							pathname?.startsWith("/settings")
								? "font-semibold text-blue-600"
								: "text-foreground/60"
						)}
					>
						Settings
					</Link>
				)}
			</nav>
		</div>
	);
}
