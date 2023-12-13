"use client";
import Header from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-screen w-screen overflow-hidden flex text-sm">
			{/* <SideBar /> */}
			<main className="w-full flex flex-col flex-1">
				<Header />
				<div className="p-3">
					<div className="border rounded-lg p-3">{children}</div>
				</div>
			</main>
		</div>
	);
}
