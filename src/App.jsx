// src/App.js
import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import { Routes, Route } from "react-router-dom"; // Remove the Router import
import TodolistPage from "./components/TodolistPage";

function App() {
  return (
    <>
      {/* Wrap the components correctly inside the Routes */}
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/welcome" element={<TodolistPage />} />
      </Routes>
    </>
  );
}

export default App;
