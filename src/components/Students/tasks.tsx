import * as React from "react";
import { Tabs } from "flowbite-react";

export interface ITasksProps {}

export default function Tasks(props: ITasksProps) {
	
	return (
		<div>
			<Tabs.Group aria-label="Full width tabs" style="fullWidth">
				<Tabs.Item title="To Do"><div className=""></div></Tabs.Item>
				<Tabs.Item title="Doing">Doing</Tabs.Item>
				<Tabs.Item title="Done">Done</Tabs.Item>
				<Tabs.Item title="Extraas ">Extraas</Tabs.Item>
			</Tabs.Group>
		</div>
	);
}
