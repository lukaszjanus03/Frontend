import "../App.css";
import ProfileCard from "../components/ProfileCard";
import { people } from "../module-data";
import ProfileGrid from "../components/ProfileGrid";
import "bootstrap/dist/css/bootstrap.min.css";

function Lab01() {
  return (
    <>
      <ProfileGrid people={people} columns={3} />
    </>
  );
}
export default Lab01;