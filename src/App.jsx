import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/User/Home";
import ThreadPage from "./pages/User/ThreadPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import CreateThreadForm from "./components/Forms/CreateThreadForm";
import "./App.css";

function App() {
  /*function handleOnClose() {
    // Logic to close the CreateThreadForm modal
    console.log('Close');
  } */
  return (
    <AuthProvider>
        <BrowserRouter>
          <div className="app-layout">
            <Header />
            <div className="app-container">
              <main className="main-center-content">
                {/* <CreateThreadForm onClose={handleOnClose}/> */}
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />   
                  <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
                  <Route path="/thread/:id" element={<PrivateRoute><ThreadPage /></PrivateRoute>} />
                  <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
              </main>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
