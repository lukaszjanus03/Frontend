import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import GridContainer from '../components/GridContainer';
import ProfileCardLab03 from '../components/ProfileCardLab03'; 

function Lab04() {
  const navigate = useNavigate();


  const handleAddClick = () => {
    navigate('/lab04/add'); 
  };

  return (
    <Container>
      <Row className="align-items-center mb-4">
        <Col>
          <h2>Laboratorium 4 - Kontekst i Formularze</h2>
        </Col>
        <Col xs="auto" className="text-end">
          <Button variant="success" onClick={handleAddClick}>
            + Dodaj Nowy Profil
          </Button>
        </Col>
      </Row>

      <GridContainer element={ProfileCardLab03} />
    </Container>
  );
}

export default Lab04;