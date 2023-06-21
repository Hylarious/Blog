import { useSelector } from "react-redux"
import Posts from "../Posts/Posts"
import { getPostsByCategory } from "../../../redux/postsRedux"
import { useParams } from "react-router"

const Category = () => {

	const { category } = useParams()
	const posts = useSelector(state => getPostsByCategory(state, category))

	return(
		<Posts posts={posts}/>
	)
}
export default Category