import React from "react";
import GoogleSearchPage from "./google_interface/GoogleSearchPage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./login_form/Main/LoginForm";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/home" element={<GoogleSearchPage />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
