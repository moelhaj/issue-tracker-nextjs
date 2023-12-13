import React from "react";

export default function Logo() {
	return (
		<div className="flex flex-col gap-0.5">
			<div className="flex gap-0.5">
				<div className="w-3 h-3 bg-violet-600 rounded" />
				<div className="w-3 h-3 bg-violet-400 rounded" />
			</div>
			<div className="flex gap-0.5">
				<div className="w-3 h-3 bg-violet-400 rounded" />
				<div className="w-3 h-3 bg-violet-600 rounded" />
			</div>
		</div>
	);
}

// export default function Logo() {
// 	return (
// 		<div className="flex flex-col gap-0.5 group">
// 			<div className="flex gap-0.5">
// 				<div className="w-3 h-3 bg-violet-600 rounded-sm duration-300 delay-0 group-hover:bg-violet-400" />
// 				<div className="w-3 h-3 bg-violet-400 rounded-sm duration-300 delay-75 group-hover:bg-violet-600" />
// 			</div>
// 			<div className="flex gap-0.5">
// 				<div className="w-3 h-3 bg-violet-400 rounded-sm duration-300 delay-100 group-hover:bg-violet-600" />
// 				<div className="w-3 h-3 bg-violet-600 rounded-sm duration-300 delay-150 group-hover:bg-violet-400" />
// 			</div>
// 		</div>
// 	);
// }
