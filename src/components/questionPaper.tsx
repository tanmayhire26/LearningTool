import * as React from "react";

export interface Props {
    someprop:String;
}

export default function QuestionPaper({someprop}: Props) {
	return (
		<div>
			<h2 className="flex justify-center">Examination</h2>
            <div className="shadow p-1">{someprop}</div>
		</div>
	);
}
