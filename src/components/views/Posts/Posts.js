import { Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { getAllPosts } from "../../../redux/postsRedux"
import Post from "../../features/Post/Post"

const Posts = () => {

	const posts = useSelector(state => getAllPosts(state))
	return (
		<Row md={3} sm={2} xs={1} className="g-4">
		{posts.map(post => <Col key={post.id}><Post  {...post}/></Col> )}
		</Row>
	)
}
export default Posts

