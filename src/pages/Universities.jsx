import React from 'react';
import CreateUniversity from '../Components/universities/cruds/CreateUniversity';
import { useState } from 'react';
import './pagesStyle/Universities.css';
import HomeUniversities from '../Components/universities/HomeUniversities';
const Universities = () => {
  const [viewContainer, setViewContainer] = useState('home');

  console.log(viewContainer);
  return (
    <>
      {viewContainer === 'home' && (
        <HomeUniversities
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
