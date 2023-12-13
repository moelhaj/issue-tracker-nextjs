import Image from "next/image";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { UserNav } from "./user-nav";
import Link from "next/link";

export default function index() {
	return (
		<header className="w-full border-b">
			<div className="max-w-6xl mx-auto w-full px-3 flex h-14 items-center">
				<MainNav />
				<MobileNav />
				<div className="flex-1" />
				<Link href="/">
					<Image priority src="./logo.svg" alt="codex logo" width="20" height="20" />
				</Link>
				<div className="flex-1" />
				<UserNav />
			</div>
		</header>
	);
}
