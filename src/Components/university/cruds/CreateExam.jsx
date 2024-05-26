import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../../utils/getToken';

const CreateExam = ({ setViewContainer, dataUniversity }) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const url = `${import.meta.env.VITE_URL_API}/exams`;

    axios
      .post(
        url,
        { ...data, university_id: dataUniversity.id },
        config
      )
      .then((res) => {
        toast.success('El examen se agrego exitosamente');
        setViewContainer('home');
      })
      .catch((err) => {
        toast.error('Hubo un error en agregar el examen');
        console.log(err);
      });
    reset();
  };

  return (
    <div className="create_container ">
      <section className="create_sectionOne">
        <button onClick={() => setViewContainer('home')}>
          <i class="bx bx-left-arrow-alt"></i>
          <p>Atras</p>
        </button>
      </section>
      <section className="create_sectionTwo">
        <h1>Ingrese los datos del Examen</h1>
        <form
          className="create_formContainer"
          onSubmit={handleSubmit(submit)}
        >
          <div className="create_formDiv">
            <label htmlFor="name">
              Nombre <b>*</b>
            </label>
            <input
              {...register('name')}
              id="name"
              type="text"
              placeholder="ingresa el nombre del Examen"
              required
            />
          </div>
          <div className="create_formDiv">
            <label htmlFor="year_date">
              Año <b>*</b>
            </label>
            <input
              {...register('year_date')}
              id="year_date"
              type="text"
              placeholder="ingresa el año que se dio el examen"
              required
            />
          </div>

          <div className="create_formDiv">
            <label htmlFor="phase">
              Etapa <b>*</b>
            </label>
            <input
              {...register('phase')}
              id="phase"
              type="text"
              placeholder="ingresa la etapa del examen"
              required
            />
          </div>
          <div className="create_form_buttonsContainer">
            <button
              type="button"
              className="create_formButton"
              onClick={() => setViewContainer('home')}
            >
              Atras
            </button>
            <button type="submit" className="create_formButton">
              Agregar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateExam;
