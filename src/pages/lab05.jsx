import { useEffect, useReducer } from 'react';
import { Table, Accordion, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFetch from '../data/useFetch';
import TableDataReducer from '../data/TableDataReducer';
import Lab05TableHeader from '../components/Lab05TableHeader';


function Lab05() {
  const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");

  const [state, dispatch] = useReducer(TableDataReducer, {
    initialData: [],
    sortedData: [],
  });

  useEffect(() => {
    if (posts.length > 0 && users.length > 0 && comments.length > 0) {
      const combinedData = posts.map((p) => {
        const user = users.find((u) => u.id === p.userId);
        const postComments = comments.filter((c) => c.postId === p.id);
        
        return {
          user: user || { name: 'Nieznany' }, 
          post: p,
          comments: postComments,
        };
      });
      dispatch({ type: 'INITIALIZE', payload: combinedData });
    }
  }, [posts, users, comments]); 

  const { sortedData } = state;

  if (sortedData.length === 0) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Ładowanie danych...</span>
      </Spinner>
    );
  }

  return (
    <div>
      <h2>Laboratorium 5 - Dane z API</h2>
      <Table striped bordered hover responsive>
        <Lab05TableHeader dispatch={dispatch} />
        <tbody>
          {sortedData.map((item) => (
            <tr key={item.post.id}>
              <td>{item.post.id}</td>
              
              <td>
                {item.user.id ? (
                  <Link to={`/lab05/users/${item.user.id}`}>
                    {item.user.name}
                  </Link>
                ) : (
                  item.user.name
                )}
              </td>

              <td>
                <Accordion>
                  <Accordion.Item eventKey={String(item.post.id)}>
                    <Accordion.Header>{item.post.title}</Accordion.Header>
                    <Accordion.Body>
                      {item.post.body}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </td>

              <td className="text-center">
                <Link to={`/lab05/posts/${item.post.id}/comments`}>
                  {item.comments.length}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Lab05;