import React from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Body } from "./body";
//create your first component

export function Home() {
	return (
		<div className="container-fluid">
			<div className="justify-content-center">
				<Navbar />
				<Body />
			</div>
			<Footer currentYear={new Date().getFullYear()} />
		</div>
	);
}
