import React from "react";
import { Navbar } from "./navbar"
import { Jumbotron } from "./jumbotron";
import { Cartas } from "./cartas"
import  PropTypes from "prop-types";
//create your first component

let paragraphs={
     firstParagraph:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
    secondParagraph: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
    thirdParagraph: "The sunflower (Helianthus annuus) is a living annual plant in the family Asteraceae, with a large flower head (capitulum).",
    fourthParagraph: "The ermine is native to the area between the 40th parallel (north) and the beginning of the Arctic Circle."
}
export function Home() {
	return (
		<div className="container justify-content-center">
			<Navbar />
			<div>
				<Jumbotron />
				<Cartas firstParagraph/>
			</div>
            <footer className="footer">
                <p>Copyrights Your Welcome 2019</p>
            </footer>
		</div>
	);
}
