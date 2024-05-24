import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const University = () => {
  const { id } = useParams();
  const [dataUniversity, setDataUniversity] = useState();

  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/universities/${id}`;

    axios
      .get(url)
      .then((res) => setDataUniversity(res.data.university))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(dataUniversity);

  return (
    <div className="pages_container">
      <section className="pages_sectionOne">
        <h1>{dataUniversity?.name}</h1>
        <button onClick={() => setViewContainer('create')}>
          Agregar Universidad
        </button>
      </section>
      <section>
        <h2>EXAMENES</h2>
      </section>
    </div>
  );
};

export default University;
