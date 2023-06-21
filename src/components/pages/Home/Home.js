import { Button, Container, Stack } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import Posts from "../../views/Posts/Posts"
import Title from "../../common/Title/Title"
import { useSelector } from "react-redux"
import { getAllPosts } from "../../../redux/postsRedux"


const Home = () => {
	const posts = useSelector(state => getAllPosts(state))
	return (
		<Container >
			<Stack direction="horizontal" className="mb-4">
				<Title>All Posts</Title>
				<Button className="ms-auto" as={NavLink} to="/post/add" variant="outline-info">Add posts</Button>
			</Stack>
			<Posts posts={posts}/>
		</Container>
		)
}
export default Home