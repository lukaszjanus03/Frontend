import NavBarMenuApp from "../components/NavBarMenuApp";
import FooterApp from "../components/FooterApp";
import { Outlet} from 'react-router-dom';

function RootLayout({ children }) {
  return (
    <>
      <NavBarMenuApp />
      <Outlet/>
      <FooterApp />
    </>
  );
}
export default RootLayout;