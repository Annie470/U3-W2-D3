import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Alert, Spinner, Container, Row, Col, Image } from "react-bootstrap";


const MovieDetails =()=> {

    const[readFilm, setReadFilm] = useState();
const[isError, setIsError]=useState(false)
const[isLoading, setIsLoading]= useState(true)
    const params = useParams();

    const endpoint = "https://www.omdbapi.com/?apikey=";
    const key = "f5942648";
    const chiamata = (id)=>{
        fetch(endpoint + key + "&i=" + id)
         .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Errore richiesta: ${response.status}`);
        }
      })
      .then((data) => {
        setReadFilm(data)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsError(true)
        setIsLoading(false)
        console.error(err);
      });
    }

    useEffect(()=>{
chiamata(params.movieId)
    },[])
    return(
        <>
         {isError && ( <Alert variant="danger">Impossibile recuperare il film...</Alert>)}
        {isLoading && (<div className="d-flex justify-content-center">
    <Spinner animation="border" variant="light" />
  </div>) }
        {!isLoading && !isError && (
        <Container fluid>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 px-4 ">
                <Col key={readFilm.imdbID}  className="mb-2 text-center px-1 d-flex flex-column h-100">
                  <Image fluid
                    src={readFilm.Poster} alt={`Copertina film: ${readFilm.Title}`} 
                    style={{ objectFit: 'cover', height: '400px' }}
                    />
                </Col>
            </Row>
          </Container>)}
    </>)
}
export default MovieDetails