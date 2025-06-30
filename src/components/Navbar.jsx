import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">🏠HOME</span>
				</Link>
				<div className="ml-auto">
					<Link to="/favoritos">
						<button className="btn btn-primary">Favoritos⭐</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};