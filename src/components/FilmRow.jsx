import { Alert, Spinner, Container, Row, Col, Image } from "react-bootstrap";
import { Component } from "react";

class FilmRow extends Component {
  state = {
    isError: false,
    isLoading: true,
    films: [],
  };

  endpoint = "https://www.omdbapi.com/?apikey=";
  key = "f5942648";

  getFilms = () => {
   fetch(this.endpoint + this.key + "&s=" + this.props.query)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Errore richiesta: ${response.status}`);
        }
      })
      .then((data) => {
          this.setState({ films: data.Search, isLoading: false });
      })
      .catch((err) => {
        this.setState({ isError: true, isLoading: false });
        console.error(err);
      });
  };

  componentDidMount() {
    this.getFilms(); 
  }

  render() {
    return (
       <>
       <div className="p-2" style={{ backgroundColor: '#141414' }}>
        <h4 className="ms-4 text-light">{this.props.h4}</h4>
        {this.state.isError && ( <Alert variant="danger">Impossibile recuperare i film...</Alert>)}
        {this.state.isLoading && (<div className="d-flex justify-content-center">
    <Spinner animation="border" variant="light" />
  </div>) }
        {!this.state.isLoading && !this.state.isError && (
          <Container fluid>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 px-4 ">
            
                {/* sennò escono anche i giochi */}
              {this.state.films.slice(0, this.props.num).map((film) => (
                <Col key={film.imdbID}  className="mb-2 text-center px-1 d-flex flex-column h-100">
                  <Image fluid
                    src={film.Poster} alt={`Copertina film: ${film.Title}`} 
                    style={{ objectFit: 'cover', height: '400px' }} />
                </Col>
              ))}
            </Row>
          </Container>
        )}
        </div>
      </>
  );
}
}

export default FilmRow;
