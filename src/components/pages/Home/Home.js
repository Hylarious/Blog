import { Button, Container, Stack } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import Posts from "../../views/Posts/Posts"


const Home = () => {
	return (
		<Container >
			<Stack direction="horizontal" className="mb-4">
				<h2>All Posts</h2>
				<Button className="ms-auto" as={NavLink} to="/post/add" variant="outline-info">Add posts</Button>
			</Stack>
			<Posts />
		</Container>
		)
}
export default Home