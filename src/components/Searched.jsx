import { Alert, Spinner, Container, Row, Col, Image } from "react-bootstrap";
import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Searched = ()=> {

  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [films, setFilms] = useState([])

  const endpoint = "https://www.omdbapi.com/?apikey=";
  const key = "f5942648";

 const navigate = useNavigate();
 const params = useParams();

  const getFilms = () => {
   fetch(endpoint + key + "&s=" + params.query)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Errore richiesta: ${response.status}`);
        }
      })
      .then((data) => {
        setFilms(data.Search)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsError(true)
        setIsLoading(false)
        console.error(err);
      });
  };

  useEffect(()=>{getFilms()},[])

    return (
       <>
       <div className="p-2" style={{ backgroundColor: '#141414' }}>
        {isError && ( <Alert variant="danger">Impossibile recuperare i film...</Alert>)}
        {isLoading && (<div className="d-flex justify-content-center">
    <Spinner animation="border" variant="light" />
  </div>) }
        {!isLoading && !isError && (
          <Container fluid>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 px-4 ">
            
              {films.map((film) => (
                <Col key={film.imdbID}  className="mb-2 text-center px-1 d-flex flex-column h-100">
                  <Image fluid
                    src={film.Poster} alt={`Copertina film: ${film.Title}`} 
                    style={{ objectFit: 'cover', height: '400px' }}
                    onClick={()=>{navigate('/MovieDetails/'+ film.imdbID)}}
                    />
                </Col>
              ))}
            </Row>
          </Container>
        )}
        </div>
      </>
  );
}


export default Searched;
