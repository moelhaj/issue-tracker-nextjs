"use client";
import { useSelector, useDispatch } from "react-redux";
import { redirect } from "next/navigation";
import { login } from "@/redux/features/user";
import Image from "next/image";
import Logo from "@/components/shared/logo";
import { useEffect } from "react";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const admin = {
	name: "Dolores Abernathy",
	email: "dolores.abernathy@codex.io",
	title: "Product Manager",
	role: "admin",
};

const developer = {
	name: "Bernard Lowe",
	email: "bernard.lowe@codex.io",
	title: "Full Stack Developer",
	role: "developer",
};

export default function Home() {
	const dispatch = useDispatch();
	const { user } = useSelector((state: any) => state.user);

	if (user) {
		redirect("/dashboard");
	}

	return (
		<div className="pt-40 flex flex-col w-full gap-6 items-center justify-center">
			<Image priority src="./logo.svg" alt="codex logo" width="20" height="20" />

			<div className="flex flex-col gap-3 items-center justify-center">
				<h1 className="text-lg font-medium text-center mt-3">Experience as</h1>
				<div className="flex gap-3">
					<Card
						onClick={() => dispatch(login(admin))}
						className="w-40 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 duration-300"
					>
						<CardContent className="pt-6 flex flex-col items-center gap-5">
							<Image src="/admin.png" alt="login as admin" width={50} height={50} />
							<CardDescription className="text-xs">Product Manager</CardDescription>
						</CardContent>
					</Card>
					<Card
						onClick={() => dispatch(login(developer))}
						className="w-40 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 duration-300"
					>
						<CardContent className="pt-6 flex flex-col items-center gap-5">
							<Image
								src="/developer.png"
								alt="login as admin"
								width={50}
								height={50}
							/>
							<CardDescription className="text-xs">Developer</CardDescription>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
