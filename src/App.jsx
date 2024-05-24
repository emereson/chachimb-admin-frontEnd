import './App.css';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Users from './pages/Users';
import ProtectedRoutes from './utils/ProtecteRoutes';
import Universities from './pages/Universities';

function App() {
  const userDataJSON = localStorage.getItem('userData'); // Obtener la cadena JSON de localStorage
  const userData = JSON.parse(userDataJSON);

  console.log(userData);
  return (
    <>
      <Header userData={userData} />
      <Routes>
        <Route path="/log-in" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/users" element={<Users />} />
          <Route path="/universities" element={<Universities />} />

          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
