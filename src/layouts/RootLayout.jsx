import NavBarMenuApp from "../components/NavBarMenuApp";
import FooterApp from "../components/FooterApp";
import { Outlet } from 'react-router-dom';
import { Container } from "react-bootstrap"; 

function RootLayout() {
  return (
    <>
      <NavBarMenuApp />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <FooterApp />
    </>
  );
}

export default RootLayout;