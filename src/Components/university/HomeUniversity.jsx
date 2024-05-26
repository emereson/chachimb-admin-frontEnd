import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './universitiesStyle/HomeUniversity.css';
import ExamsUniversity from './ExamsUniversity';

const HomeUniversity = ({ dataUniversity, setViewContainer }) => {
  const navigate = useNavigate();

  return (
    <div className="University_container">
      <section className="University_sectionOne">
        <button onClick={() => navigate(`/universities`)}>
          <i class="bx bx-left-arrow-alt"></i>
          <p>Atras</p>
        </button>
      </section>

      <section className="University_sectionTwo">
        <article className="University_sectionTwo_article">
          <img
            src={`${import.meta.env.VITE_URL_IMG}/image/${
              dataUniversity?.badge
            }`}
            alt=""
          />
          <h1>{dataUniversity?.name}</h1>
        </article>
        <button
          className="University_sectionTwo_button"
          onClick={() => setViewContainer('create')}
        >
          Agregar Examen
        </button>
      </section>
      <ExamsUniversity dataUniversity={dataUniversity} />
    </div>
  );
};

export default HomeUniversity;
