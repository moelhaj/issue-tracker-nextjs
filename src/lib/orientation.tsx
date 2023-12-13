"use client";
import { useOrientation } from "react-use";

export default function Orientation({ layout }: any) {
	const orientationState = useOrientation();
	if (orientationState.angle !== 0) {
		return (
			<div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-900">
				<p>Please rotate your device back</p>
			</div>
		);
	}
	return layout;
}
