import { useState } from "react"
import { Form, Button } from "react-bootstrap"

const PostForm = props => {

const [title, setTitle] = useState(props.title || '')
const [author, setAuthor] = useState(props.author || '')
const [publishedDate, setPublishedDate] = useState(props.publishedDate || '')
const [shortDescription, setShortDescription] = useState(props.shortDescription || '')
const [content, setContent] = useState(props.content || '')


const handleSubmit = e => {
	e.preventDefault();
	props.action({ title, author, publishedDate, shortDescription, content });
};

return (
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
					<Form.Control type="text" required value={publishedDate} onChange={e => setPublishedDate(e.target.value)}/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Short Description</Form.Label>
					<Form.Control as="textarea" rows={3} required value={shortDescription} onChange={e => setShortDescription(e.target.value)}/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Main Content</Form.Label>
					<Form.Control as="textarea" rows={8} required value={content} onChange={e => setContent(e.target.value)}/>
				</Form.Group>
				<Button variant="primary" type="submit">{props.actionText}</Button>
			</Form>
)
}

export default PostForm