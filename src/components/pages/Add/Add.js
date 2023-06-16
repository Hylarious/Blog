import { Container, Row, Col, Stack } from "react-bootstrap"
import AddForm from "../../features/AddForm/AddForm"
import Title from "../../common/Title/Title"

const Add = () => {
	return(
		<Container>
			<Row className="justify-content-center">
				<Col xs={8}>
					<Stack>
						<Title>Add Post</Title>
						<AddForm />
					</Stack>
				</Col>
			</Row>
		</Container>
		
	)
}

export default Add