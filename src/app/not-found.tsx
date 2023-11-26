"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
	const router = useRouter();
	return (
		<div className="w-screen h-screen grid place-content-center">
			<div className="flex flex-col space-y-3 items-center">
				<h1 className="text-xl font-extralight">404 - Not Found</h1>
				<button
					className="bg-violet-600 text-white rounded-md px-2 py-1"
					onClick={() => router.back()}
				>
					Back
				</button>
			</div>
		</div>
	);
}
