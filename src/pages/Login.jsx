import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './pagesStyle/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [viewPassword, setViewPassword] = useState(false);
  const [emailError, setEmailError] = useState(null);

  const submit = (data) => {
    const url = `${import.meta.env.VITE_URL_API}/user/login`;

    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        const userDataJSON = JSON.stringify(res.data.user);
        localStorage.setItem('userData', userDataJSON);
        navigate('/');
        window.location.reload();
      })

      .catch((err) => {
        console.log(err);
        setEmailError(err.response.data.message);
      });

    // reset();
  };
  return (
    <div className="Login__container">
      <section className="Login_sectionOne">
        <article className="Login_sectionOne_articleOne">
          <img src="./logo.png" alt="logo" />
        </article>
        <article className="Login_sectionOne_articleTwo">
          <h1>INICIAR SESIÓN</h1>
          <form
            onSubmit={handleSubmit(submit)}
            className="Login_sectionOne_Form"
          >
            <div className="Login_sectionOne_Form_div">
              <label htmlFor="email">Correo electrónico *</label>
              <input
                {...register('email')}
                id="email"
                type="email"
                placeholder="Ingresa tu  correo electrónico"
                required
              />
            </div>
            {emailError ? <span>{emailError}</span> : null}
            <div className="Login_sectionOne_Form_div">
              <label htmlFor="password">Contraseña *</label>
              <input
                {...register('password')}
                id="password"
                type={viewPassword ? 'text' : 'password'}
                placeholder="Contraseña"
                required
              />

              <img
                src="./icons/eye.svg"
                alt=""
                onClick={() => setViewPassword(!viewPassword)}
              />
            </div>
            <button type="submit">inciar sesión</button>
          </form>
        </article>
      </section>
    </div>
  );
};

export default Login;
