import { Button, Form, FormControl, FormText, Alert } from "react-bootstrap";
import { useState, useContext } from "react";
import AppContext from "../data/AppContext";
import { useNavigate } from "react-router-dom";

const nameField = "name";
const emailField = "email";
const phoneField = "phone";
const birthDateField = "birthDate";
const roleField = "role";
const placeOfBirthField = "placeOfBirth"; 

function FormAdd() {
  const [errors, setErrors] = useState([]);
  const [isSending, setSending] = useState(false);
  const { items, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const onSubmitFunction = async (e) => {
    e.preventDefault();
    setErrors([]);
    const data = new FormData(e.target);
    const newErrors = []; 

    if (data.get(nameField).length < 3) {
      newErrors.push("Imię i nazwisko musi mieć co najmniej 3 znaki.");
    }
    if (data.get(phoneField).length < 9) {
      newErrors.push("Numer telefonu musi mieć co najmniej 9 cyfr.");
    }
    if (data.get(placeOfBirthField).length < 2) {
      newErrors.push("Miejsce urodzenia musi mieć co najmniej 2 znaki.");
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const maxId = items.reduce((max, current) => {
        const currentId = Number(current.id);
        if (isNaN(currentId)) return max;
        return Math.max(max, currentId);
    }, 0); 

    const nextId = maxId + 1;

    const newPerson = {
      id: String(nextId), 
      name: data.get(nameField),
      email: data.get(emailField),
      phone: data.get(phoneField),
      birthDate: data.get(birthDateField),
      role: data.get(roleField),
      placeOfBirth: data.get(placeOfBirthField), 
      rating: 0,
      checked: false
    };

    dispatch({
      type: 'ADDED',
      payload: newPerson
    });

    setSending(false);
    navigate('/lab04');
  };

  return (
    <>
      <h2>Dodaj Nowy Profil </h2>
      {errors.length > 0 && (
        <Alert variant="danger">
          <strong>Wystąpiły błędy:</strong>
          <ul>
            {errors.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </Alert>
      )}
      <Form onSubmit={onSubmitFunction}>
      
        <Form.Group className="mb-3">
          <Form.Label htmlFor={nameField}>Imię i nazwisko</Form.Label>
          <FormControl required id={nameField} name={nameField} placeholder="Np. Jan Kowalski" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor={emailField}>Adres e-mail</Form.Label>
          <FormControl required id={emailField} type="email" name={emailField} placeholder="Np. jan.kowalski@example.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor={phoneField}>Telefon</Form.Label>
          <FormControl required id={phoneField} type="tel" name={phoneField} placeholder="Np. 123456789" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor={birthDateField}>Data urodzenia</Form.Label>
          <FormControl required id={birthDateField} type="date" name={birthDateField} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor={roleField}>Rola</Form.Label>
          <FormControl required id={roleField} name={roleField} placeholder="Np. Developer" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor={placeOfBirthField}>Miejsce urodzenia</Form.Label>
          <FormControl 
            required
            id={placeOfBirthField} 
            name={placeOfBirthField} 
            placeholder="Np. Warszawa" 
          />
          <FormText>Podaj miasto urodzenia.</FormText>
        </Form.Group>
        
        <div className="d-grid mt-4">
          <Button disabled={isSending} type="submit" variant="primary" size="lg">
            {isSending ? 'Dodawanie...' : 'Dodaj osobę'}
          </Button>
        </div>
        
      </Form>
    </>
  );
}

export default FormAdd;