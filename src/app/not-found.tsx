"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
	const router = useRouter();
	return (
		<div className="w-screen h-screen grid place-content-center">
			<div className="flex flex-col space-y-3 items-center">
				<h1 className="">404 - Not Found</h1>
				<Button size="sm" onClick={() => router.back()}>
					Back
				</Button>
			</div>
		</div>
	);
}
