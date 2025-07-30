import { Navbar, Nav, Container,} from 'react-bootstrap';
import { Search, Bell, PersonCircle } from 'react-bootstrap-icons';
import { Link, useLocation } from 'react-router-dom'


const MyNav = () => {
  const location = useLocation()
  return (
    <>
    <Navbar
      expand="lg"
      data-bs-theme="dark"
      style={{ backgroundColor: '#141414' }}
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="src\assets\logo.png"
            alt="Netflix logo"
            style={{ width: '100px', height: '55px' }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navBtn" />

        <Navbar.Collapse id="navBtn">
          <Nav className="me-auto mb-2 mb-lg-0 fw-bold">
              <Link
              className={
                location.pathname === '/' ? 'nav-link active' : 'nav-link'
              }
              to="/"
            >
              Home
            </Link>
              <Link
              className={
                location.pathname === '/TvShows' ? 'nav-link active' : 'nav-link'
              }
              to="/TvShows"
            >
              Tv Shows
            </Link>
            <Link
              className={
                location.pathname === '/ErrLoadPage' ? 'nav-link active' : 'nav-link'
              }
              to="/ErrLoadPage"
            >
              Movies
            </Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-3">
            <Search className="icons" color="white" size={20} />
            <div id="kids" className="fw-bold text-white">KIDS</div>
            <Bell className="icons" color="white" size={20} />
            <PersonCircle className="icons" color="white" size={24} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default MyNav;
