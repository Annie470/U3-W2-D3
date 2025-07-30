import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ErrLoadPage = () => {

  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col className="text-center">
          <Link to="/">
            <p>Homepage</p>
          </Link>
         <p>Pagina in allestimento</p>
        </Col>
      </Row>
    </Container>
  )
}

export default ErrLoadPage