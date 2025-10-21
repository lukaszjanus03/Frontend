import { Button, ButtonGroup } from 'react-bootstrap';
import ProfileParagraph from "./ProfileParagraph";
import RatingBar from './RatingBar';

// Komponent, tak jak przygotowaliśmy w Zadaniu 7, przyjmuje 'person' i 'dispatch'
function ProfileCardLab03({ person, dispatch }) {
  const { id, name, email, phone, birthDate, rating } = person;

  return (
    <div className={`card shadow-sm text-center p-4 mb-4 ${person.checked ? 'border-success border-3' : ''}`} style={{ width: "18rem" }}>
      <div className="card-body d-flex flex-column">
        <h4 className="card-title mb-4 text-primary">Profil użytkownika</h4>

        <ProfileParagraph label="Imię" title={name} />
        <ProfileParagraph label="Email" title={email} />
        <ProfileParagraph label="Telefon" title={phone} />
        <ProfileParagraph label="Data urodzin" title={birthDate} />

        <p className="mt-3 mb-0"><strong>Ocena: {rating || 0} / 10</strong></p>
        <RatingBar rate={rating} />

        <ButtonGroup className="mt-auto">
          {/* Przycisk Edit pozostaje bez zmian, zgodnie z poleceniem */}
          <Button variant="secondary" size="sm" onClick={() => alert(`Edycja osoby ID: ${id}`)}>
            Edit
          </Button>

          {/* Przycisk Check wysyła akcję typu 'check' z ID osoby */}
          <Button
            variant="success"
            size="sm"
            onClick={() => {
              dispatch({
                type: "check",
                payload: { id: id } // Używamy payload do przekazywania danych
              });
            }}
          >
            Check
          </Button>

          {/* Przycisk Rate wysyła akcję typu 'rate' z ID osoby */}
          <Button
            variant="info"
            size="sm"
            onClick={() => {
              dispatch({
                type: "rate",
                payload: { id: id }
              });
            }}
          >
            Rate
          </Button>

          {/* Przycisk Delete wysyła akcję typu 'delete', dokładnie jak w przykładzie */}
          <Button
            variant="danger"
            size="sm"
            onClick={() => {
              dispatch({
                type: "delete",
                payload: { id: id }
              });
            }}
          >
            Delete
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default ProfileCardLab03;