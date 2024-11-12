import { FC } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import SingUp from "./components/SingUp/SingUp";
import ListCandidates from "./components/ListCandidates/ListCandidates";
import PrivateRoute from "./components/PraivetRoute/PraivetRoute";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<SingUp />} path="/SingUp" />
        <Route
          element={
            <PrivateRoute>
              <ListCandidates />
            </PrivateRoute>
          }
          path="/listCandidates"
        />
        <Route element={<Login />} path="*" />
      </Routes>
    </>
  );
};

export default App;
