import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Issue Tracker",
	description: "Track project issues",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} dark:bg-slate-900 dark:text-slate-200 bg-slate-100 text-slate-700`}
			>
				<div className="mx-auto container p-3">
					<Navbar />
					{children}
				</div>
			</body>
		</html>
	);
}
