"use client";
import { useSelector, useDispatch } from "react-redux";
import { redirect } from "next/navigation";
import { logout } from "@/redux/features/user";

export default function Dashboard() {
	const dispatch = useDispatch();
	const { user } = useSelector((state: any) => state.user);

	if (!user) {
		redirect("/");
	}

	return (
		<div>
			<div>
				<div className="cursor-pointer" onClick={() => dispatch(logout())}>
					Logout
				</div>
			</div>
			Dashboard
			<p>{user}</p>
		</div>
	);
}
