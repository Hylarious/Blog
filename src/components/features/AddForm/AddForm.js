import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { addPost } from "../../../redux/postsRedux"
import { useNavigate } from "react-router-dom"

const AddForm = () => {

const dispatch = useDispatch()
const navigate = useNavigate()
const [title, setTitle] = useState('')
const [author, setAuthor] =useState('')
const [date, setDate] =useState('')
const [short, setShort] =useState('')
const [main, setMain] =useState('')

const handleSubmit = e => {
	e.preventDefault()
	dispatch(addPost({title:title, shortDescription: short, content:main, publishedDate:date, author:author}))
	setAuthor('')
	setDate('')
	setMain('')
	setShort('')
	setTitle('')
	navigate('/')
}	

	return(
		<Form onSubmit={handleSubmit}>
			<Form.Group className="mb-3">
				<Form.Label>Title</Form.Label>
				<Form.Control type="text" required value={title} onChange={e => setTitle(e.target.value)}/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Author</Form.Label>
				<Form.Control type="text" required value={author} onChange={e => setAuthor(e.target.value)}/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Published</Form.Label>
				<Form.Control type="text" required value={date} onChange={e => setDate(e.target.value)}/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Short Description</Form.Label>
				<Form.Control as="textarea" rows={3} required value={short} onChange={e => setShort(e.target.value)}/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Main Content</Form.Label>
				<Form.Control as="textarea" rows={8} required value={main} onChange={e => setMain(e.target.value)}/>
			</Form.Group>
			<Button variant="primary" type="submit">Submit</Button>
		</Form>
	)
}

export default AddForm