import { useState } from "react"
import { Form, Button, FormLabel } from "react-bootstrap"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesRedux";
import CategoryOption from "../../common/CategoryOption/CategoryOption";

const PostForm = props => {

const categories = useSelector(state => getAllCategories(state))

	
const [title, setTitle] = useState(props.title || '')
const [author, setAuthor] = useState(props.author || '')
const [publishedDate, setPublishedDate] = useState(props.publishedDate || '')
const [shortDescription, setShortDescription] = useState(props.shortDescription || '')
const [content, setContent] = useState(props.content || '')
const [choseCategory, setChoseCategory] = useState(props.category || '')

const [contentError, setContentError] = useState(false)
const [dateError, setDateError] = useState(false)
const setError = () => {
	setContentError(!content)
	setDateError(!publishedDate)
}

const { register, handleSubmit: validate, formState: { errors } } = useForm();

const handleSubmit = () => {
	if(content && publishedDate)
		props.action({ title, author, publishedDate, choseCategory, shortDescription, content });
};

return (
	<Form onSubmit={(e) => {e.preventDefault();validate(handleSubmit)(e);setError()}}>
		<Form.Group className="mb-3" controlId="formBasicEmail">
			<Form.Label>Title</Form.Label>
			<Form.Control 
				{...register("title", {required: true, minLength: 3})}
				type="text"
				value={title}
				onChange={e => setTitle(e.target.value)}
				placeholder="Enter title"/>
			{errors.title && 
			<small className="d-block form-text text-danger mt-2">
				This field is too short (min: 3)
			</small>}
		</Form.Group>
		<Form.Group className="mb-3">
			<Form.Label>Author</Form.Label>
			<Form.Control
				{...register("author", {required: true, minLength:3})}
				type="text"
				value={author}
				onChange={e => setAuthor(e.target.value)}
				placeholder="Enter author"/>
			{errors.author && 
			<small className="d-block form-text text-danger mt-2">
				This field is too short (min: 3)
			</small>}
		</Form.Group>
		<Form.Group className="mb-3">
			<Form.Label>Published</Form.Label>
			<ReactDatePicker 
				selected={publishedDate} 
				onChange={date => setPublishedDate(date)}/>
			{dateError && 
			<small className="d-block form-text text-danger mt-2">
				Set date!
			</small>}
		</Form.Group>
		<Form.Group className="mb-3">
			<FormLabel>Category</FormLabel>
			<Form.Select
				{...register("category", {required: true})}  
				value={choseCategory} 
				onChange={e => setChoseCategory(e.target.value)}>
					<option value=''>Select category...</option>
					{categories.map(category =><CategoryOption key={category.id} {...category}/> )}
			</Form.Select>
			{errors.category && 
			<small className="d-block form-text text-danger mt-2">
				Choose category
			</small>}
		</Form.Group>
		<Form.Group className="mb-3">
			<Form.Label>Short Description</Form.Label>
			<Form.Control 
				{...register("shortDescription", {required: true, minLength:20})}
				as="textarea" 
				rows={3}
				value={shortDescription} 
				onChange={e => setShortDescription(e.target.value)}/>
			{errors.shortDescription &&
			<small className="d-block form-text text-danger mt-2">
				This field is too short (min: 20)
			</small>}
		</Form.Group>
		<Form.Group className="mb-3">
			<Form.Label>Main Content</Form.Label>
			<ReactQuill theme="snow" value={content} onChange={setContent}/>
			{contentError &&
			<small className="d-block form-text text-danger mt-2">
				Content can't be empty
			</small>}
		</Form.Group>
		<Button variant="primary" type="submit">{props.actionText}</Button>
	</Form>
)
}

export default PostForm