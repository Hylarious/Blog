import { useSelector } from "react-redux"
import { getAllCategories } from "../../../redux/categoriesRedux"
import { ListGroup, Row, Col } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Categories = () => {
	const categories = useSelector(state => getAllCategories(state))
console.log(categories)
	return (	
		<Row className="justify-content-center">
			<Col xs={8}>
				<ListGroup >
					{categories.map(category => {
						return (
							<ListGroup.Item 
								key={category.id}
								as={NavLink}
								to={`/category/${category.title}`}>
									{category.title}	
							</ListGroup.Item>
						)
					})}
				</ListGroup>
			</Col>
		</Row>
			)
}

export default Categories