import { Navigate, useNavigate, useParams } from "react-router-dom"
import PostForm from "../PostForm/PostForm"
import { useDispatch, useSelector } from "react-redux"
import { editPost, getPostById } from "../../../redux/postsRedux"


const EditForm = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { id } = useParams()
	const postData = useSelector(state => getPostById(state, id))
	const handleSubmit = post => {
		dispatch(editPost({...post, id}))
		navigate('/')
	} 	
	console.log(postData)

	if(!postData) return <Navigate to="/" />
	return(
			<PostForm 
			actionText="Edit Post"
			action={handleSubmit}
			title={postData.title}
			author={postData.author}
			publishedDate={postData.publishedDate}
			shortDescription={postData.shortDescription}
			content={postData.content}
			/>
		)
}

export default EditForm