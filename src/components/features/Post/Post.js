import { Card, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Post = props =>{
	return(
		<Card>
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Subtitle><span className="fw-bold">Author:</span> {props.author}</Card.Subtitle>
				<Card.Subtitle><span className="fw-bold">Date:</span> {props.publishedDate}</Card.Subtitle>
				<Card.Text>{props.content}</Card.Text>
				<Button className="ms-auto" as={NavLink} to={`/post/${props.id}`}>Read More</Button>
			</Card.Body>
		</Card>
	)
}

export default Post