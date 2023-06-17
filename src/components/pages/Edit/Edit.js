import { Row, Col, Stack } from "react-bootstrap"
import Title from "../../common/Title/Title"
import EditForm from "../../features/EditForm/EditForm"

const Edit = () => {
	return (
		<Row className="justify-content-center">
				<Col xs={8}>
					<Stack>
						<Title>Edit Post</Title>
						<EditForm />
					</Stack>
				</Col>
			</Row>
	)
}

export default Edit