import React from 'react';
import './universitiesStyle/ExamsUniversity.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExamsUniversity = ({ dataUniversity }) => {
  const [viewSchools, setViewSchools] = useState(0);
  const navigate = useNavigate();

  console.log(viewSchools);
  return (
    <div className="ExamsUniversity_container">
      <h2>Examenes</h2>
      <section className="ExamsUniversity_sectionOne">
        {dataUniversity?.years.map((exam) => (
          <article
            key={exam.id}
            className="ExamsUniversity_examContianer"
            onMouseOut={() => setViewSchools(0)}
            onMouseOver={() => setViewSchools(exam.id)}
          >
            <div className="ExamsUniversity_exam_data">
              <h3>{exam.name}</h3>
              <h4>{exam.year_date}</h4>
              <p>{exam.phase}</p>
            </div>
            <div
              className={`ExamsUniversity_exam_buttons ${
                viewSchools === exam.id &&
                'ExamsUniversity_exam_viewButtons'
              }`}
            >
              {exam.schools.map((school) => (
                <button
                  key={school.id}
                  onClick={() => navigate(`/school/${school.id}`)}
                >
                  {school.name}
                </button>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default ExamsUniversity;
