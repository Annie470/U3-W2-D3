import { useState } from "react";
import { Form, InputGroup, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchFilm = () => {
  const [query, setQuery] = useState("");
  const navigate =useNavigate()

  return (
    <Container style={{ backgroundColor: '#141414' }} fluid>
        <Row className="justify-content-center"><Col xs={4}>
    <Form onSubmit={(e)=> {
 e.preventDefault()
 navigate("/Searched/"+query)
 setQuery("")
    }} className="my-3">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Cerca un film..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="warning" type="submit">
          Cerca
        </Button>
      </InputGroup>
    </Form></Col></Row></Container>
  );
};

export default SearchFilm;