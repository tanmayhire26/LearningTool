import * as React from "react";

export interface ILearningProps {}

export default function Learning(props: ILearningProps) {
	const taskList: string[] = [
		"First Reading",
		"Second Reading",
		"Make Notes",
		"Analyse",
		"Test",
	];
	return (
		<>
			<div>Learning journey</div>
			<div className="p-2">
				{taskList.map((t) => (
					<div key={t}>{t}</div>
				))}
			</div>
		</>
	);
}
