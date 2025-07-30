import { Component } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";

class Profile extends Component {
  render() {
    return (
      <Container className="m-0 py-5" fluid style={{ backgroundColor: "#141414" }}>
        <Row className="text-center pt-3">
          <Col>
            <h2 className="text-light">Edit Profile</h2>
          </Col>
        </Row>

        <Row className="justify-content-center pt-3">
          <Col
            sx={12}
            md={4}
            className="d-flex justify-content-center justify-content-md-end align-items-start ">
            <Image
              className="w-50 mb-2"
              src="public\netflix-profile-pictures.jpg"
              alt="avatar"
            />
          </Col>

          <Col sx={12} md={6}>
            <Row className="justify-content-center justify-content-md-start">
              <Col xs={12} md={6}>
                <h4
                  className="text-light p-1 ps-2"
                  style={{ backgroundColor: "#515050ff" }}>
                  {this.props.user}
                </h4>
              </Col>
            </Row>

            <Row className="justify-content-start">
              <Col xs={4} md={4} lg={3} className="mb-3">
                <Form.Label className="text-secondary mt-2">
                  Languages:
                </Form.Label>
                <Form.Select className="bg-dark text-light">
                  <option>English</option>
                  <option>Italian</option>
                </Form.Select>
              </Col>
            </Row>

            <Row className="justify-content-center justify-content-md-start">
              <Col xs={12} md={6}>
                <Form.Label className="text-secondary mt-2">
                  Maturity Settings:
                </Form.Label>
                <h6
                  className="text-light p-1 ps-2"
                  style={{ backgroundColor: "#515050ff" }}>
                  ALL MATURITY RATINGS
                </h6>
                <p className="text-secondary">
                  Show titles of
                  <span className="text-light"> all maturity ratings</span> for
                  this profile
                </p>
                <Button variant="outline-secondary" className="mb-3">
                  EDIT
                </Button>
              </Col>
            </Row>

            <Row className="justify-content-center justify-content-md-start">
              <Col xs={12} md={6}>
                <h5 className="text-secondary">Autoplay controls</h5>
                <Form.Check id="autoplay1" className="text-secondary">
                  <Form.Check.Input
                    type="checkbox"
                    className="bg-transparent"/>
                  <Form.Check.Label>
                    Autoplay next episode in a series on all devices.
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check id="autoplay2" className="text-secondary">
                  <Form.Check.Input
                    type="checkbox"
                    className="bg-transparent"/>
                  <Form.Check.Label>
                    Autoplay previews while browsing on all devices.
                  </Form.Check.Label>
                </Form.Check>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="justify-content-center pt-3">
          <Col xs={8} md={2} className="d-flex justify-content-center">
            <Button variant="outline-secondary" className="mb-3 w-100">
              SAVE
            </Button>
          </Col>
          <Col xs={8} md={2}>
            <Button variant="outline-secondary" className="mb-3 w-100">
              CANCEL
            </Button>
          </Col>
          <Col xs={8} md={3} lg={2}>
            <Button variant="outline-secondary" className="mb-3 w-100">
              DELETE PROFILE
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;
