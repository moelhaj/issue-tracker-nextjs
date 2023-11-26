import { useEffect } from "react";
import { TbLayoutBoard, TbClipboardCheck, TbListDetails } from "react-icons/tb";
import { cls } from "@/lib/cls";
export default function MobileMenu(props: any) {
	return (
		<>
			{props.expand && (
				<div
					className="fixed inset-0 z-40 bg-gray-800 bg-opacity-30"
					onClick={() => props.setExpand(false)}
				></div>
			)}
			<div
				className={cls(
					props.expand ? "w-56 translate-x-0" : "w-0 -translate-x-64",
					"fixed z-50 h-full duration-300 lg:hidden"
				)}
			>
				<div className="h-full bg-white pt-20 pr-4 pl-1.5 dark:bg-gray-900">
					<div className="flex h-full flex-col gap-5">
						<div>Dashboard</div>
						<div>Dashboard</div>
						<div>Dashboard</div>
						<div>Dashboard</div>
						<div>Dashboard</div>
						<div>Dashboard</div>

						<div className="flex-1"></div>
						<div className="w-52 pb-10">User Menu</div>
					</div>
				</div>
			</div>
		</>
	);
}
