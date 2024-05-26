import './App.css';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Users from './pages/Users';
import ProtectedRoutes from './utils/ProtecteRoutes';
import Universities from './pages/Universities';
import { ToastContainer } from 'react-toastify';
import './pages/pagesStyle/create.css';
import './pages/pagesStyle/pages.css';
import 'react-toastify/dist/ReactToastify.css';
import University from './pages/University';
import School from './pages/School';

function App() {
  const userDataJSON = localStorage.getItem('userData'); // Obtener la cadena JSON de localStorage
  const userData = JSON.parse(userDataJSON);

  return (
    <>
      <ToastContainer />

      <Header userData={userData} />
      <Routes>
        <Route path="/log-in" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/users" element={<Users />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/university/:id" element={<University />} />
          <Route path="/school/:id" element={<School />} />

          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
