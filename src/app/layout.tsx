import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/provider";
import { ThemeProvider } from "@/lib/theme";
import Orientation from "@/lib/orientation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Codex",
	description: "Manage projects issues",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} overflow-hidden bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100`}
			>
				<Orientation
					layout={
						<Providers>
							<ThemeProvider
								attribute="class"
								defaultTheme="system"
								enableSystem
								disableTransitionOnChange
							>
								{children}
							</ThemeProvider>
						</Providers>
					}
				/>
			</body>
		</html>
	);
}
