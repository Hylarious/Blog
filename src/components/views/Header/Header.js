import { NavLink } from "react-router-dom"
import { Container, Navbar} from "react-bootstrap"
import NavBar from "../NavBar/NavBar"

const Header = () => {
	return (
	<Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
		<Container>
			<Navbar.Brand as={NavLink} to="/" >Blog.app</Navbar.Brand>
			<NavBar />
		</Container>
	</Navbar>
	)
}

export default Header