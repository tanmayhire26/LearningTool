import { Tabs } from "flowbite-react";
import * as React from "react";

import navItems from "../../services/navbarItems.json";
import Instructions from "../Students/instructions";
import Learning from "../Students/learning";
import Tasks from "../Students/tasks";

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
	const componentsArr: { element: JSX.Element; name: string }[] = [
		{ element: <Instructions />, name: "Instructions" },
		{ element: <Learning />, name: "Learning" },
		{ element: <Tasks />, name: "Tasks" },
		{ element: <Instructions />, name: "Instructions" },
		{ element: <Instructions />, name: "Instructions" },
	];
	return (
		<div className="grid grid-cols-12">
			<div className="col-span-3"></div>
			<div className="col-span-8">
				<Tabs.Group aria-label="Tabs with underline" style="underline">
					{navItems.student.map((s) => (
						<Tabs.Item key={s.name} title={s.name}>
							{componentsArr.find((c) => c.name == s.name)?.element}
						</Tabs.Item>
					))}
				</Tabs.Group>
			</div>
		</div>
	);
}
