import { Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const NavBar = () => {
	return (
		<div>
			<Nav className="me-auto">
				<Nav.Link as={NavLink} to="/">Home</Nav.Link>
				<Nav.Link as={NavLink} to="/categories">Categories</Nav.Link>
				<Nav.Link as={NavLink} to="/about">About</Nav.Link>
			</Nav>
		</div>
	)
}

export default NavBar