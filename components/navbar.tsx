import React from "react";
import UserMenu from "./user-menu";
import Link from "next/link";

export default function Navbar() {
	return (
		<div className="flex justify-between items-center p-3">
			<Link href="/" className="bg-indigo-600 px-2 py-0.5 rounded-md text-white">
				<span className="font-bold text-xl">C</span>
			</Link>
			<UserMenu />
		</div>
	);
}
