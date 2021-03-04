import React from "react";

const imageStyle = {
	width: "100%",
	height: "300px"
};
export function Cartas() {
	return (
		<div className="row mb-3">
			<div className="card-decks col-sm-6 col-lg-3">
				<img
					className="card-img-top"
					src="https://i.pinimg.com/736x/5f/90/c8/5f90c8057779dc12858a3905c6279550.jpg"
					style={imageStyle}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title"> Card Title</h5>
					<p className="card-text">
						Lorem ipsum, or lipsum as it is sometimes known, is
						dummy text used in laying out print, graphic or web
						designs.
					</p>
					<a href="#" className="btn btn-primary">
						Find out More
					</a>
				</div>
			</div>
			<div className="card-decks col-sm-6 col-lg-3">
				<img
					className="card-img-top"
					src="https://i.pinimg.com/736x/5f/90/c8/5f90c8057779dc12858a3905c6279550.jpg"
					style={imageStyle}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title"> Card Title</h5>
					<p className="card-text">
						Lorem ipsum, or lipsum as it is sometimes known, is
						dummy text used in laying out print, graphic or web
						designs.
					</p>
					<a href="#" className="btn btn-primary">
						Find out More
					</a>
				</div>
			</div>
			<div className="card-decks col-sm-6 col-lg-3">
				<img
					className="card-img-top"
					src="https://i.pinimg.com/736x/5f/90/c8/5f90c8057779dc12858a3905c6279550.jpg"
					style={imageStyle}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title"> Card Title</h5>
					<p className="card-text">
						Lorem ipsum, or lipsum as it is sometimes known, is
						dummy text used in laying out print, graphic or web
						designs.
					</p>
					<a href="#" className="btn btn-primary">
						Find out More
					</a>
				</div>
			</div>
			<div className="card-decks col-sm-6 col-lg-3">
				<img
					className="card-img-top"
					src="https://i.pinimg.com/736x/5f/90/c8/5f90c8057779dc12858a3905c6279550.jpg"
					style={imageStyle}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title"> Card Title</h5>
					<p className="card-text">
						Lorem ipsum, or lipsum as it is sometimes known, is
						dummy text used in laying out print, graphic or web
						designs.
					</p>
					<a href="#" className="btn btn-primary">
						Find out More
					</a>
				</div>
			</div>
		</div>
	);
}
