import { useState } from "react";
import { useSelector } from "react-redux";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import UserMenu from "./user-menu";
import Image from "next/image";
import Toggler from "./toggler";

export default function Header() {
	const { user } = useSelector((state: any) => state.user);
	const [openUserMenu, setOpenUserMenu] = useState(false);
	const [expand, setExpand] = useState(false);
	return (
		<div className="flex justify-between p-3">
			<Toggler toggleMenu={() => setExpand(!expand)} menu={expand} />
			<div className="flex lg:hidden">
				<Logo />
			</div>
			<div
				onClick={() => setOpenUserMenu(!open)}
				className="w-9 h-9 border-2 rounded-full border-violet-600 grid place-content-center cursor-pointer"
			>
				<Image
					src={user === "admin" ? "/admin.png" : "/developer.png"}
					alt="avatar"
					width={20}
					height={20}
				/>
			</div>
			<UserMenu open={openUserMenu} close={() => setOpenUserMenu(false)} />
			<MobileMenu expand={expand} setExpand={setExpand} />
		</div>
	);
}
