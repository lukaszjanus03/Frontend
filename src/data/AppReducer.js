
export default function AppReducer(state, action) {
  
  switch (action.type) {
    
    case "ADDED":
      return [...state, action.payload];

    case "UPDATED":
      return state.map(person => {
        if (person.id == action.payload.id) {
          return action.payload;
        }
        return person;
      });

    case "check":
      return state.map(person => {
        if (person.id == action.payload.id) {
          return { ...person, checked: !person.checked };
        }
        return person;
      });

    case "rate":
      return state.map(person => {
        if (person.id == action.payload.id) {
          const currentRating = person.rating || 0;
          const newRating = currentRating >= 10 ? 0 : currentRating + 1;
          return { ...person, rating: newRating };
        }
        return person;
      });

    case "delete":
      return state.filter(person => person.id != action.payload.id);

    default:
      return state;
  }
}