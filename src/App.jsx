import { useReducer } from 'react';
import { Routes, Route } from "react-router-dom";
import AppContext from './data/AppContext';
import AppReducer from './data/AppReducer';
import { people as initialData } from './module-data';
import RootLayout from "./layouts/RootLayout";
import Lab01 from "./pages/lab01";
import Lab02 from "./pages/lab02";
import Lab03 from "./pages/lab03";
import Lab04 from "./pages/lab04";
import FormAdd from "./pages/FormAdd";
import FormEdit from "./pages/FormEdit";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";



function App() {

  const [state, appDispatch] = useReducer(AppReducer, initialData);

  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/lab01" element={<Lab01 />} />
          <Route path="/lab02/:id" element={<Lab02 />} />
          <Route path="/lab03" element={<Lab03 />} />
          <Route path="/lab04" element={<Lab04 />} />
          <Route path="/lab04/add" element={<FormAdd />} />
          <Route path="/lab04/edit/:id" element={<FormEdit />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;