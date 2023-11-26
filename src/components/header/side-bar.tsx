import React from "react";
import { cls } from "@/lib/cls";
import Logo from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { VscOutput, VscPreview, VscLayout } from "react-icons/vsc";

type Props = {
	isMenuOpen: Boolean;
};

type Link = {
	id: number;
	label: string;
	path: string;
	icon: any;
};

const links = [
	{ id: 1, label: "Dashboard", path: "/", icon: <VscLayout size={20} /> },
	{ id: 2, label: "Projects", path: "/projects", icon: <VscPreview size={20} /> },
	{ id: 3, label: "My Tasks", path: "/my-tasks", icon: <VscOutput size={20} /> },
];

export default function SideBar() {
	const currentRoute = usePathname();
	return (
		<div className="hidden lg:flex h-screen overflow-hidden duration-300 flex-col bg-gray-50">
			<div className="p-2 flex gap-2 items-center">
				<Logo />
				<h1 className="font-bold text-2xl tracking-tighter">Codex</h1>
			</div>

			<menu className="w-52 flex flex-col gap-3 mt-10">
				{links.map(({ label, id, path, icon }: Link) => (
					<Link
						className={cls(
							currentRoute === path
								? "bg-gray-200 hover:bg-gray-300"
								: "bg-transparent hover:bg-gray-200",
							"rounded-md flex gap-2 items-center"
						)}
						key={id}
						href={path}
					>
						<span>{icon}</span>
						<span>{label}</span>
					</Link>
				))}
			</menu>

			<div className="mt-auto">User</div>
		</div>
	);
}
