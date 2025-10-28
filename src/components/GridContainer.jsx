import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppContext from '../data/AppContext';

function GridContainer({ element }) {
  const { items, dispatch } = useContext(AppContext);

  const ElementComponent = element;

  if (!items || items.length === 0 || !ElementComponent) {
    return <p>Brak danych do wyświetlenia (z kontekstu).</p>;
  }

  return (
    <Container>
      <Row>
        {items.map((item) => (
          <Col md={4} key={item.id} className="mb-4 d-flex justify-content-center">
            <ElementComponent person={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default GridContainer;