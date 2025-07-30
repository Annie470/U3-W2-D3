import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Paypal } from 'react-bootstrap-icons';
import { BadgeHd } from 'react-bootstrap-icons';

const Account = (props) => {
  return (
    <Container fluid className="d-flex flex-column p-5"  style={{ backgroundColor: '#f4f1f1ff' }}>
      <h2 className="display-5">Account</h2>
      <Row className="py-2">
        <Col md={4}>
          <h5 className="text-secondary">MEMBERSHIP & BILLING</h5>
          <Button variant="secondary">Cancel Membership</Button>
        </Col>
        <Col>
          <Row>
            <Col>
              <Row>
                <Col>
                  <p className="text-black">{props.email}</p>
                </Col>
                <Col className="text-end">
                  <a href="#" className="text-primary text-decoration-none d-block">
                    Change account name
                  </a>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="text-secondary">Password: *******</p>
                </Col>
                <Col className="text-end">
                  <a href="#" className="text-primary text-decoration-none d-block">
                    Change password
                  </a>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="text-secondary">Phone: 320 044 1679</p>
                </Col>
                <Col className="text-end">
                  <a href="#" className="text-primary text-decoration-none d-block">
                    Change phone number
                  </a>
                </Col>
              </Row>
            </Col>

            <Col xs={12} className="py-2">
              <Row>
                <Col>
                  <Paypal className="me-1" />
                  <p className="d-inline">PayPal</p>
                </Col>
                <Col className="text-end">
                  <a href="#" className="text-primary text-decoration-none d-block">
                    Update payment info
                  </a>
                  <a href="#" className="text-primary text-decoration-none d-block">
                    Billing details
                  </a>
                </Col>
              </Row>
            </Col>

            <Col xs={12} className="py-2">
              <Row>
                <Col />
                <Col className="text-end">
                  <a href="#" className="text-primary d-block text-decoration-none">
                    Redeem gift card or promo code
                  </a>
                  <a href="#" className="text-primary d-block text-decoration-none">
                    Where to buy gift cards
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>


      <Row className="py-2">
        <Col>
          <h5 className="text-secondary">PLAN DETAILS</h5>
        </Col>
        <Col>
        {/* MA MAGARI AVESSI IL PREMIUM */}
          <p className="d-inline">{props.plan}</p> 
          <BadgeHd className="ms-2" />
        </Col>
        <Col className="text-end">
          <a href="#" className="text-primary text-decoration-none">
            Change Plan
          </a>
        </Col>
      </Row>


      <Row className="py-2">
        <Col xs={4}>
          <h5 className="text-secondary">SETTINGS</h5>
        </Col>
        <Col xs={8}>
          <a href="#" className="text-primary text-decoration-none d-block">
            Parental controls
          </a>
          <a href="#" className="text-primary text-decoration-none d-block">
            Test participation
          </a>
          <a href="#" className="text-primary text-decoration-none d-block">
            Manage download devices
          </a>
          <a href="#" className="text-primary text-decoration-none d-block">
            Activate a device
          </a>
          <a href="#" className="text-primary text-decoration-none d-block">
            Recent device streaming activity
          </a>
          <a href="#" className="text-primary text-decoration-none d-block">
            Sign out of all devices
          </a>
        </Col>
        <Col />
      </Row>


      <Row className="py-2">
        <Col>
          <h5 className="text-secondary">MY PROFILE</h5>
        </Col>
        <Col>
          <Image src="public\netflix-profile-pictures.jpg" alt="avatar" width={30} className="me-1" />
          <p className="d-inline">{props.user}</p>
        </Col>
        <Col className="text-end">
          <a href="#" className="text-primary text-decoration-none d-block">
            Manage profile
          </a>
          <a href="#" className="text-primary text-decoration-none d-block">
            Add profile email
          </a>
        </Col>
      </Row>


      <Row className="py-2">
        <Col />
        <Col>
          <a href="#" className="text-primary text-decoration-none d-block">
            Language
          </a>
          <a href="#" className="text-primary text-decoration-none d-block">
            Playback settings
          </a>
          <a href="#" className="text-primary text-decoration-none d-block">
            Subtitle appearance
          </a>
        </Col>
        <Col>
          <a href="#" className="text-primary text-decoration-none d-block">
            Viewing activity
          </a>
          <a href="#" className="text-primary text-decoration-none d-block">
            Ratings
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
