import { Container, Row, Col, Button } from 'react-bootstrap';
import {
  Facebook,
  Instagram,
  TwitterX,
  Youtube,
} from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyFooter = () => {
  return (
    <footer className="text-white py-2" style={{ backgroundColor: '#141414' }}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <Row className="mb-2">
              <Col >
                <Facebook className="footer-icon me-2" />
                <Instagram className="footer-icon me-2" />
                <TwitterX className="footer-icon me-2" />
                <Youtube className="footer-icon" />
              </Col>
            </Row>

            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4">
              <Col className="footer-links">
                <p><a href="#" className="text-white text-decoration-none">Audio and Subtitles</a></p>
                <p><a href="#" className="text-white text-decoration-none">Media Center</a></p>
                <p><a href="#" className="text-white text-decoration-none">Privacy</a></p>
                <p><a href="#" className="text-white text-decoration-none">Contact us</a></p>
              </Col>

              <Col className="footer-links">
                <p><a href="#" className="text-white text-decoration-none">Audio Description</a></p>
                <p><a href="#" className="text-white text-decoration-none">Investor Relations</a></p>
                <p><a href="#" className="text-white text-decoration-none">Legal Notices</a></p>
              </Col>

              <Col className="footer-links">
                <p><a href="#" className="text-white text-decoration-none">Help Center</a></p>
                <p><a href="#" className="text-white text-decoration-none">Jobs</a></p>
                <p><a href="#" className="text-white text-decoration-none">Cookie Preferences</a></p>
              </Col>

              <Col className="footer-links">
                <p><a href="#" className="text-white text-decoration-none">Gift Cards</a></p>
                <p><a href="#" className="text-white text-decoration-none">Terms of Use</a></p>
                <p><a href="#" className="text-white text-decoration-none">Corporate Information</a></p>
              </Col>
            </Row>

            <Row>
              <Col className="mb-2">
                <Button
                  variant="outline-light"
                  size="sm"
                  className="rounded-0 mt-3 footer-button"
                >
                  Service Code
                </Button>
              </Col>
            </Row>

            <Row>
              <Col className="mb-2 mt-2 copyright text-secondary" style={{ fontSize: '0.85rem' }}>
                © 1997-2023 Netflix, Inc.
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
