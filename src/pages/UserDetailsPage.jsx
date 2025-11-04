import { useParams } from 'react-router-dom';
import useFetch from '../data/useFetch';
import { Card, ListGroup, Spinner, Alert } from 'react-bootstrap';

function UserDetailsPage() {
  const { id } = useParams();
  const [user] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!user || user.length === 0) {
    return <Spinner animation="border" />;
  }

  if (user.message) {
    return <Alert variant="danger">Nie znaleziono użytkownika.</Alert>;
  }

  return (
    <Card style={{ width: '30rem' }}>
      <Card.Header as="h2">{user.name}</Card.Header>
      <Card.Body>
        <Card.Title>@{user.username}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Email:</strong> {user.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Telefon:</strong> {user.phone}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Strona WWW:</strong> {user.website}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Adres:</strong> {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Firma:</strong> {user.company.name}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default UserDetailsPage;