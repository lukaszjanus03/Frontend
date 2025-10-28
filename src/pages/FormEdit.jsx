import { Button, Form, FormControl, FormText, Alert } from "react-bootstrap";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import AppContext from "../data/AppContext";

function FormEdit() {
  const { id } = useParams();
  const { items, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const personToEdit = items.find(p => p.id == id); 

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: personToEdit
  });

  const onEditSubmit = (data) => {
    dispatch({
      type: 'UPDATED',
      payload: data
    });
    navigate('/lab04');
  };

  if (!personToEdit) {
    return (
      <Alert variant="danger">
        Nie znaleziono osoby o ID: {id}.
      </Alert>
    );
  }

  return (
    <>
      <h2>Edytuj Profil: {personToEdit.name} </h2>
      
      <Form onSubmit={handleSubmit(onEditSubmit)}>
        
        <input type="hidden" {...register("id")} />

        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Imię i nazwisko</Form.Label>
          <FormControl
            id="name"
            placeholder="Np. Jan Kowalski"
            {...register("name", {
              required: "Imię jest wymagane.",
              minLength: { value: 3, message: "Imię musi mieć co najmniej 3 znaki." }
            })}
          />
          {errors.name && <FormText className="text-danger">{errors.name.message}</FormText>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Adres e-mail</Form.Label>
          <FormControl
            id="email"
            type="email"
            placeholder="Np. jan.kowalski@example.com"
            {...register("email", {
              required: "Email jest wymagany.",
              pattern: { value: /^\S+@\S+$/i, message: "Niepoprawny format e-mail." }
            })}
          />
          {errors.email && <FormText className="text-danger">{errors.email.message}</FormText>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="phone">Telefon</Form.Label>
          <FormControl id="phone" type="tel" name="phone" placeholder="Np. 123456789"
            {...register("phone")}
           />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="birthDate">Data urodzenia</Form.Label>
          <FormControl id="birthDate" type="date" name="birthDate" 
            {...register("birthDate")}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="role">Rola</Form.Label>
          <FormControl id="role" name="role" placeholder="Np. Developer" 
            {...register("role")}
          />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label htmlFor="placeOfBirth">Miejsce urodzenia</Form.Label>
          <FormControl
            id="placeOfBirth"
            placeholder="Np. Warszawa"
            {...register("placeOfBirth", { 
              required: "Miejsce urodzenia jest wymagane.",
              minLength: { value: 2, message: "Musi mieć co najmniej 2 znaki." }
            })}
          />
          {errors.placeOfBirth && <FormText className="text-danger">{errors.placeOfBirth.message}</FormText>}
        </Form.Group>

        <div className="d-grid mt-4">
          <Button type="submit" variant="primary" size="lg">
            Zapisz zmiany
          </Button>
        </div>
        
      </Form>
    </>
  );
}

export default FormEdit;