import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from "./Components/Login"
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import ProtectedRoute from './Components/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>}
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
