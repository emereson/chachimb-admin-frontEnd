import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeUniversity = ({ viewContainer, setViewContainer }) => {
  const [universities, setUniversities] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/universities`;

    axios
      .get(url)
      .then((res) => setUniversities(res.data.universities))
      .catch((err) => console.log(err));
  }, [viewContainer]);
  console.log(universities);

  return (
    <div className="pages_container">
      <section className="pages_sectionOne">
        <h1>Tus Universidades</h1>
        <button onClick={() => setViewContainer('create')}>
          Agregar Universidad
        </button>
      </section>
      <section className="Universities__cardsContainer">
        {universities?.map((university) => (
          <article key={university.id} className="Universities__card">
            <img
              src={`${import.meta.env.VITE_URL_IMG}/image/${
                university.badge
              }`}
              alt=""
            />
            <h3>{university.acronym}</h3>
            <h4>{university.name}</h4>
            <button
              onClick={() => navigate(`/university/${university.id}`)}
            >
              Ver mas
            </button>
          </article>
        ))}
      </section>
    </div>
  );
};

export default HomeUniversity;
