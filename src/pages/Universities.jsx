import React from 'react';
import CreateUniversity from '../Components/universities/cruds/CreateUniversity';
import { useState } from 'react';
import HomeUniversity from '../Components/universities/HomeUniversity';
import './pagesStyle/Universities.css';
const Universities = () => {
  const [viewContainer, setViewContainer] = useState('home');

  console.log(viewContainer);
  return (
    <>
      {viewContainer === 'home' && (
        <HomeUniversity
          setViewContainer={setViewContainer}
          viewContainer={viewContainer}
        />
      )}
      {viewContainer === 'create' && (
        <CreateUniversity setViewContainer={setViewContainer} />
      )}
    </>
  );
};

export default Universities;
