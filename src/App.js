import "./app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import HomePage from "./components/HomePage";
import RegistrationForm from "./components/RegistrationForm";
import RefInput from "./components/RefInput";
import NotFoundPage from "./components/NotFoundPage";
import SingleUserPage from "./components/SingleUserPage";
import Coctails from "./components/Coctails";

import { createContext, useState } from "react";
import { Routes, Route } from "react-router";

import {
  HOME_PATH,
  PRODUCTS_PATH,
  REF_PATH,
  REGISTRATION_PATH,
  NOT_FOUND_PATH,
  SINGLE_USER_PATH,
} from "./constants/routes-links";

export const UsersContext = createContext();

const App = () => {
  const [usersCount, setUsersCount] = useState(0);
  const [longestName, setLongestName] = useState('');
  return (
    <UsersContext.Provider value={{ usersCount, setUsersCount, longestName, setLongestName }}>
      <div className="App">
        <Header />
        <Coctails/>
        <Routes>
          <Route path={HOME_PATH} element={<HomePage />} />
          <Route path={PRODUCTS_PATH} element={<Products />} />
          <Route path={REGISTRATION_PATH} element={<RegistrationForm />} />
          <Route path={REF_PATH} element={<RefInput />} />
          <Route path={SINGLE_USER_PATH} element={<SingleUserPage />} />
          <Route path={NOT_FOUND_PATH} element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </UsersContext.Provider>
  );
};

export default App;
