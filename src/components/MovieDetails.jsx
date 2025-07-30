import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert, Spinner, Container, Row, Col, Image, ListGroup } from "react-bootstrap";
import AddComment from "./AddComment";

const MovieDetails = () => {
  const [readFilm, setReadFilm] = useState();
  const [comm, setComm] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [forUp, setForUp]=useState(true)
  const params = useParams();

  const endpoint = "https://www.omdbapi.com/?apikey=";
  const key = "f5942648";
  const chiamataFilm = (id) => {
    fetch(endpoint + key + "&i=" + id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Errore richiesta: ${response.status}`);
        }
      })
      .then((data) => {
        setReadFilm(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
        console.error(err);
      });
  };

  const endopint2 = `https://striveschool-api.herokuapp.com/api/comments/`;
  const chiamataCommenti = (id) => {
    fetch(endopint2 + id, {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODgyMWYzMmZlMzZkMDAwMTU5NzU4MTYiLCJpYXQiOjE3NTMzNTgxMzAsImV4cCI6MTc1NDU2NzczMH0.e0s40I7Kn-R4ZbRhY2HdP17MOyFqP76G-kLpdCuZ1Xs',
  },
})

      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Errore richiesta: ${response.status}`);
        }
      })
      .then((data) => {
        setComm(data);
        console.log(data)
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    chiamataFilm(params.movieId);
    chiamataCommenti(params.movieId);
  }, [forUp]);
  return (
    <>
      {isError && (
        <Alert variant="danger">Impossibile recuperare il film...</Alert>
      )}
      {isLoading && (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="light" />
        </div>
      )}
      {!isLoading && !isError && (
        <Container fluid style={{ backgroundColor: "#141414" }}>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-3 px-4 justify-content-center ">
            <Col
              key={readFilm.imdbID}
              className="mb-2 text-center px-1 d-flex flex-column h-100">
              <Image
                fluid
                src={readFilm.Poster}
                alt={`Copertina film: ${readFilm.Title}`}
                style={{ objectFit: "cover", height: "700px" }}
              />
            </Col>
            <Col>
              <h2 className="text-white">{readFilm.Title}</h2>
              <h6 className="text-secondary">
                {readFilm.Year} - {readFilm.Genre}
              </h6>
              <h5 className="text-white fw-normal">{readFilm.Plot}</h5>
              <AddComment id={params.movieId} setForUp={setForUp}/>
             {comm.length > 0 && (
  <div className="mt-4">
    <h5 className="text-white">Recensioni</h5>
     
    <ListGroup>
      {comm.map((commento) => (
        <ListGroup.Item
          key={commento._id}
          className="bg-dark text-light border-secondary"
        >
         <h6>{commento.author}</h6>
         <p>{commento.comment}</p>
        <h6>{commento.rate}/5</h6> 
        </ListGroup.Item>
      ))}
    </ListGroup>
  </div>
)}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
export default MovieDetails;
