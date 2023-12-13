"use client";

import { useState } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { HamburgerMenuIcon, DashboardIcon, ReaderIcon, ClipboardIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetTitle, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import Image from "next/image";

const mainNav = [
	{
		title: "Dashboard",
		href: "/",
		icon: <DashboardIcon />,
	},
	{
		title: "Projects",
		href: "/projects",
		icon: <ReaderIcon />,
	},
	{
		title: "Issues",
		href: "/issues",
		icon: <ClipboardIcon />,
	},
];

export function MobileNav() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
				>
					<HamburgerMenuIcon className="h-5 w-5" />
					<span className="sr-only">Toggle Menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="px-3 w-[250px] pt-5 text-sm">
				<SheetClose></SheetClose>
				<SheetTitle>
					<Link href="/">
						<Image priority src="./logo.svg" alt="codex logo" width="20" height="20" />
					</Link>
				</SheetTitle>
				<ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
					<div className="flex flex-col space-y-3">
						{mainNav?.map(
							(item: any) =>
								item.href && (
									<MobileLink
										key={item.href}
										href={item.href}
										onOpenChange={setOpen}
										className={cn(
											"flex items-center gap-3 duration-300 hover:bg-gray-100 dark:bg-gray-800 py-2 dark:hover:bg-gray-700 rounded-lg px-2",
											pathname?.startsWith(item.href)
												? "text-white bg-violet-600 hover:bg-violet-600 dark:bg-violet-600 dark:hover:bg-violet-600"
												: "text-foreground/90 bg-transparent"
										)}
									>
										{item.icon}
										{item.title}
									</MobileLink>
								)
						)}
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
}

interface MobileLinkProps extends LinkProps {
	onOpenChange?: (open: boolean) => void;
	children: React.ReactNode;
	className?: string;
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
	const router = useRouter();
	return (
		<Link
			href={href}
			onClick={() => {
				router.push(href.toString());
				onOpenChange?.(false);
			}}
			className={cn(className)}
			{...props}
		>
			{children}
		</Link>
	);
}
