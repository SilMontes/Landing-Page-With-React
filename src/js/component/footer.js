import React from "react";

export function Footer(property) {
	return (
		<div className="card-footer bg-dark text-white text-center p-4">
			Copyright &#169; Your Welcom {property.currentYear};
		</div>
	);
}
