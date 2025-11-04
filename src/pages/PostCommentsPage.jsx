import { useParams } from 'react-router-dom';
import useFetch from '../data/useFetch';
import { Card, ListGroup, Spinner, Alert } from 'react-bootstrap';

function PostCommentsPage() {
  const { id } = useParams();
  
  const [post] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
  const [comments] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

  if ((!post || post.length === 0) || (!comments && comments.length === 0)) {
    return <Spinner animation="border" />;
  }

  if (post.message) {
    return <Alert variant="danger">Nie znaleziono posta.</Alert>;
  }

  return (
    <div>
      <Card className="mb-4">
        <Card.Header as="h2">Post #{post.id}</Card.Header>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
        </Card.Body>
      </Card>

      <h3>Komentarze ({comments.length})</h3>
      <ListGroup>
        {comments.length > 0 ? (
          comments.map(comment => (
            <ListGroup.Item key={comment.id} as="li" className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">{comment.name}</div>
                {comment.body}
              </div>
              <small className="text-muted">{comment.email}</small>
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>Brak komentarzy.</ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
}

export default PostCommentsPage;