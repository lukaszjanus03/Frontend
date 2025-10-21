// src/data/AppReducer.js

export default function AppReducer(state, action) {
  switch (action.type) {
    case "check":
      // Zwracamy NOWĄ tablicę za pomocą .map()
      return state.map(person => {
        // Jeśli ID się zgadza, zwracamy nowy obiekt osoby
        // z odwróconą wartością 'checked' (true -> false, false -> true)
        if (person.id === action.payload.id) {
          return { ...person, checked: !person.checked };
        }
        // W przeciwnym wypadku zwracamy osobę bez zmian
        return person;
      });

    case "rate":
      // Zwracamy NOWĄ tablicę za pomocą .map()
      return state.map(person => {
        if (person.id === action.payload.id) {
          const currentRating = person.rating || 0;
          // Logika z zadania 4: jeśli 10, zeruj, inaczej +1
          const newRating = currentRating >= 10 ? 0 : currentRating + 1;
          return { ...person, rating: newRating };
        }
        return person;
      });

    case "delete":
      // Zwracamy NOWĄ tablicę za pomocą .filter()
      // Filtr zachowuje tylko te elementy, dla których warunek jest prawdziwy
      return state.filter(person => person.id !== action.payload.id);

    default:
      // Jeśli typ akcji jest nieznany, MUSIMY zwrócić niezmieniony stan
      return state;
  }
}