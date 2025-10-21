// Importujemy tylko dane początkowe i komponenty do wyświetlenia
import { people as initialPeople } from '../module-data';
import GridContainer from '../components/GridContainer';
import ProfileCardLab03 from '../components/ProfileCardLab03';

function Lab03() {
  // Komponent strony nie zarządza już stanem!
  // Jego jedynym zadaniem jest przekazanie danych początkowych i komponentu do GridContainer.
  return (
    <div>
      <h2>Laboratorium 3 - Stan zarządzany w kontenerze</h2>
      <GridContainer
        initialData={initialPeople}
        element={ProfileCardLab03}
      />
    </div>
  );
}

export default Lab03;