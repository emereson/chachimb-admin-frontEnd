import React from 'react';
import { useParams } from 'react-router-dom';

const School = () => {
  const { id } = useParams;
  return <div>School</div>;
};

export default School;
