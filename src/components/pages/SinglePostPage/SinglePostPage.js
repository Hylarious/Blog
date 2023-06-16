import { Container, Stack, Button, Col, Row, Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useParams, NavLink } from "react-router-dom"
import { deletePost, getPostById } from "../../../redux/postsRedux"
import { useState } from "react"
import Title from "../../common/Title/Title"


const SinglePostPage = () => {

	const dispatch = useDispatch()
	const { id } = useParams()
	const postData = useSelector(state => getPostById(state, id))

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleDelete = () => {
		dispatch(deletePost(id))
		setShow(false)
	}

	if(!postData)	return <Navigate to="/" />
	else return (
		<Container>
			<Row className="justify-content-center">
				<Col xs={8}>
					<Stack direction="horizontal" gap={3} className="mb-4">
						<Title>{postData.title}</Title>
						<Button className="ms-auto" as={NavLink} to={`/post/edit/${postData.id}`} variant="outline-info">Edit</Button> 
						<Button onClick={handleShow} variant="outline-danger">Delete</Button>
					</Stack>
					<div>
						<h6><span className="fw-bold">Author:</span> {postData.author}</h6>
						<h6><span className="fw-bold">Date:</span> {postData.publishedDate}</h6>
						<p>{postData.content}</p>
					</div>
				</Col>
			</Row>
			<Modal show={show}
				onHide={handleClose}
				backdrop="static">
				<Modal.Header closeButton>
					<Modal.Title>Are you sure?</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						Are you sure you want to delete this post? It will be permanent.
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>Cancel</Button>
						<Button variant="danger" onClick={handleDelete}>Delete</Button>
					</Modal.Footer>
			</Modal>
		</Container>
	)
}

export default SinglePostPage