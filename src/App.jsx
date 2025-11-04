import { Routes, Route } from "react-router-dom";
import AppProvider from './data/AppProvider'; 
import RootLayout from "./layouts/RootLayout";
import Lab01 from "./pages/lab01";
import Lab02 from "./pages/lab02";
import Lab03 from "./pages/lab03";
import Lab04 from "./pages/lab04";
import Lab05 from "./pages/lab05";
import FormAdd from "./pages/FormAdd";
import FormEdit from "./pages/FormEdit";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import UserDetailsPage from "./pages/UserDetailsPage";
import PostCommentsPage from "./pages/PostCommentsPage";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/lab01" element={<Lab01 />} />
          <Route path="/lab02/:id" element={<Lab02 />} />
          <Route path="/lab03" element={<Lab03 />} />
          <Route path="/lab04" element={<Lab04 />} />
          <Route path="/lab04/add" element={<FormAdd />} />
          <Route path="/lab04/edit/:id" element={<FormEdit />} />
          <Route path="/lab05" element={<Lab05 />} /> 
          <Route path="/lab05/users/:id" element={<UserDetailsPage />} />
          <Route path="/lab05/posts/:id/comments" element={<PostCommentsPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;