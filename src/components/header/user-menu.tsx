"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
	FiActivity,
	FiChevronLeft,
	FiChevronRight,
	FiHome,
	FiLogOut,
	FiSettings,
	FiUnlock,
	FiUser,
} from "react-icons/fi";
import { HiTranslate } from "react-icons/hi";
import MenuItem from "./menu-item";
import { cls } from "@/lib/cls";
import { useTheme } from "next-themes";
import { TbSun, TbMoonStars } from "react-icons/tb";
import { motion } from "framer-motion";

export default function UserMenu({ open, close }: any) {
	const mainMenuRef = useRef<any>(null);
	const settingsMenuRef = useRef<any>(null);
	const [isDarkMode, setIsDarkMode] = useState<any>();
	const [currentMenu, setCurrentMenu] = useState("main");
	const [menuHeight, setMenuHeight] = useState();
	const { setTheme, theme } = useTheme();

	useEffect(() => {
		if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setIsDarkMode(true);
		} else {
			setIsDarkMode(false);
		}
	}, []);

	useLayoutEffect(() => {
		if (mainMenuRef.current) {
			setMenuHeight(mainMenuRef.current.offsetHeight);
		}
	}, []);

	useEffect(() => {
		if (currentMenu === "main") {
			setMenuHeight(mainMenuRef.current.offsetHeight);
		} else {
			setMenuHeight(settingsMenuRef.current.offsetHeight);
		}
	}, [currentMenu]);

	const MainMenu = () => (
		<div ref={mainMenuRef}>
			<MenuItem leftIcon={<FiHome size="20" />} text="Home" />
			<MenuItem
				leftIcon={isDarkMode ? <TbSun size="20" /> : <TbMoonStars size="20" />}
				text="Dark Mode"
				handleClick={() => {
					setTheme(isDarkMode ? "light" : "dark");
					setIsDarkMode(!isDarkMode);
				}}
			/>
			<MenuItem
				leftIcon={<FiSettings size="20" />}
				text="Settings"
				rightIcon={<FiChevronRight />}
				handleClick={() => setCurrentMenu("settings")}
			/>
		</div>
	);

	const SettingsMenu = () => (
		<div ref={settingsMenuRef}>
			<MenuItem
				leftIcon={<FiChevronLeft size="20" />}
				text="Back"
				handleClick={() => setCurrentMenu("main")}
			/>
			<MenuItem leftIcon={<FiUser size="20" />} text="Account Settings" />
			<MenuItem leftIcon={<FiUnlock size="20" />} text="Settings & Privacy" />
			<MenuItem leftIcon={<FiActivity size="20" />} text="Activity" />
			<MenuItem leftIcon={<HiTranslate size="20" />} text="Language" />
			<MenuItem leftIcon={<FiLogOut size="20" />} text="Sign Out" />
		</div>
	);

	return (
		<div className="relative w-full h-full">
			<div onClick={close} className="fixed z-10 inset-0 w-full h-full bg-transparent"></div>
			<div className="absolute z-20 top-16 right-3 rounded-md bg-white border dark:border-gray-700 dark:bg-gray-800 shadow-sm duration-300 p-3 text-sm">
				<div
					style={{ height: menuHeight }}
					className="relative overflow-hidden w-56 flex transition-height duration-500 ease-in-out"
				>
					<div
						className={cls(
							currentMenu === "main" ? "translate-x-0" : "-translate-x-full",
							"min-w-full w-56 flex flex-col gap-5 transform duration-300"
						)}
					>
						<MainMenu />
					</div>
					<div
						className={cls(
							currentMenu === "settings" ? "-translate-x-full" : "translate-x-96",
							"min-w-full w-56 flex flex-col gap-5 transform duration-300"
						)}
					>
						<SettingsMenu />
					</div>
				</div>
			</div>
		</div>
	);
}
