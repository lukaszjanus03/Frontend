import { DropdownButton, Dropdown } from 'react-bootstrap';

const SortDropdown = ({ title, columnKey, dispatch }) => (
  <DropdownButton id={`dropdown-${columnKey}`} title={title} variant="secondary" size="sm">
    <Dropdown.Item onClick={() => dispatch({ type: 'SORT_ASC', payload: columnKey })}>
      Sortuj Rosnąco (A-Z, 1-9)
    </Dropdown.Item>
    <Dropdown.Item onClick={() => dispatch({ type: 'SORT_DESC', payload: columnKey })}>
      Sortuj Malejąco (Z-A, 9-1)
    </Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item onClick={() => dispatch({ type: 'SORT_NATURAL' })}>
      Kolejność naturalna
    </Dropdown.Item>
  </DropdownButton>
);

function Lab05TableHeader({ dispatch }) {
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>
          <SortDropdown title="Użytkownik" columnKey="user" dispatch={dispatch} />
        </th>
        <th>
          <SortDropdown title="Tytuł Posta" columnKey="post" dispatch={dispatch} />
        </th>
        <th>
          <SortDropdown title="Liczba Komentarzy" columnKey="comments" dispatch={dispatch} />
        </th>
      </tr>
    </thead>
  );
}

export default Lab05TableHeader;