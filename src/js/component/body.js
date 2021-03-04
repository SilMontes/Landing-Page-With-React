import React from "react";
import { Jumbotron } from "./jumbotron";
import { Cartas } from "./cartas";

export function Body() {
	return (
		<div className="conatiner col-10 mx-auto">
			<Jumbotron />
			<Cartas />
		</div>
	);
}
