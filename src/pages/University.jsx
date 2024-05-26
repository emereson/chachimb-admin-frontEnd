import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './pagesStyle/University.css';
import HomeUniversity from '../Components/university/HomeUniversity';
import CreateExam from '../Components/university/cruds/CreateExam';

const University = () => {
  const { id } = useParams();
  const [viewContainer, setViewContainer] = useState('home');
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
    <>
      {viewContainer === 'home' && (
        <HomeUniversity
          dataUniversity={dataUniversity}
          setViewContainer={setViewContainer}
        />
      )}
      {viewContainer === 'create' && (
        <CreateExam
          setViewContainer={setViewContainer}
          dataUniversity={dataUniversity}
        />
      )}
    </>
  );
};

export default University;
