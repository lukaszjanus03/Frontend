import { useReducer } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppReducer from '../data/AppReducer'; // Importujemy nasz reducer

// Zmieniamy nazwę propsa 'data' na 'initialData' dla jasności
function GridContainer({ initialData, element }) {
  // Inicjalizujemy reducer. 'initialData' to stan początkowy.
  // 'state' to aktualna lista osób, a 'dispatch' to funkcja do wysyłania akcji.
  const [state, dispatch] = useReducer(AppReducer, initialData);

  const ElementComponent = element;

  if (!state || state.length === 0 || !ElementComponent) {
    return <p>Brak danych do wyświetlenia.</p>;
  }

  return (
    <Container>
      <Row>
        {/* Mapujemy po 'state' (który jest zarządzany przez reducer), a nie po 'initialData' */}
        {state.map((item) => (
          <Col md={4} key={item.id} className="mb-4 d-flex justify-content-center">
            {/* Przekazujemy pojedynczy element ORAZ funkcję dispatch do każdego dziecka */}
            <ElementComponent person={item} dispatch={dispatch} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default GridContainer;