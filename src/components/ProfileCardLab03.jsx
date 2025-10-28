import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../data/AppContext';
import { Button, ButtonGroup } from 'react-bootstrap';
import ProfileParagraph from "./ProfileParagraph";
import RatingBar from './RatingBar';

function ProfileCardLab03({ person }) {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const { id, name, email, phone, birthDate, rating, placeOfBirth, role } = person;

  const handleEditClick = () => {
    navigate(`/lab04/edit/${id}`);
  };

  return (
    <div className={`card shadow-sm text-center p-4 mb-4 ${person.checked ? 'border-success border-3' : ''}`} style={{ width: "18rem" }}>
      <div className="card-body d-flex flex-column">
        <h4 className="card-title mb-4 text-primary">Profil użytkownika</h4>

        <ProfileParagraph label="Imię" title={name} />
        <ProfileParagraph label="Rola" title={role} />
        <ProfileParagraph label="Miejsce urodzin" title={placeOfBirth} />
        <ProfileParagraph label="Email" title={email} />
        <ProfileParagraph label="Telefon" title={phone} />
        <ProfileParagraph label="Data urodzin" title={birthDate} />

        <p className="mt-3 mb-0"><strong>Ocena: {rating || 0} / 10</strong></p>
        <RatingBar rate={rating} />

        <ButtonGroup className="mt-auto">
          <Button variant="secondary" size="sm" onClick={handleEditClick}>
            Edit
          </Button>
          <Button
            variant="success"
            size="sm"
            onClick={() => dispatch({ type: "check", payload: { id: id } })}
          >
            Check
          </Button>
          <Button
            variant="info"
            size="sm"
            onClick={() => dispatch({ type: "rate", payload: { id: id } })}
          >
            Rate
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => dispatch({ type: "delete", payload: { id: id } })}
          >
            Delete
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default ProfileCardLab03;