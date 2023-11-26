"use client";
import { useSelector, useDispatch } from "react-redux";
import { redirect } from "next/navigation";
import { login } from "@/redux/features/user";
import Image from "next/image";
import Logo from "@/components/header/logo";
import { useEffect } from "react";

export default function Home() {
	const dispatch = useDispatch();
	const { user } = useSelector((state: any) => state.user);

	if (user) {
		redirect("/dashboard");
	}

	return (
		<div className="pt-32 flex flex-col w-full gap-6 items-center justify-center">
			<Logo />

			<div className="flex flex-col gap-3 items-center justify-center">
				<h1 className="text-lg font-medium text-center mt-3">Experience as</h1>
				<div className="flex gap-3">
					<div
						className="w-40 cursor-pointer px-3 py-6 rounded-lg border shadow flex gap-5 flex-col items-center hover:bg-gray-100 dark:hover:bg-gray-800 duration-300"
						onClick={() => dispatch(login("admin"))}
					>
						<Image src="/admin.png" alt="login as admin" width={50} height={50} />
						<h1 className="text-sm">Product Manager</h1>
					</div>
					<div
						className="w-40 cursor-pointer px-3 py-6 rounded-lg border shadow flex gap-5 flex-col items-center  hover:bg-gray-100 dark:hover:bg-gray-800 duration-300"
						onClick={() => dispatch(login("developer"))}
					>
						<Image src="/developer.png" alt="login as admin" width={50} height={50} />
						<h1 className="text-sm">Developer</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
