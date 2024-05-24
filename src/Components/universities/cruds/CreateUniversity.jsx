import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import ViewSelectImg from '../../../hooks/ViewSelectImg';
import config from '../../../utils/getToken';

const CreateUniversity = ({ crud, setViewContainer }) => {
  // Para las imágenes
  const {
    selectedImage,
    selectedFileImg,
    handleImageChange,
    handleOnClickImg,
    deleteSelectImgClick,
  } = ViewSelectImg({ idElementImg: 'linkImg' });

  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const url = `${import.meta.env.VITE_URL_API}/universities`;
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('acronym', data.acronym);
    formData.append('location', data.location);

    if (selectedFileImg) {
      formData.append('linkImg', selectedFileImg);
    }

    axios
      .post(url, formData, config)
      .then((res) => {
        toast.success('La Universidad se agro exitosamente');
        deleteSelectImgClick();
      })
      .catch((err) => {
        toast.error('Hubo un error en agregar la Universidad');
        console.log(err);
        deleteSelectImgClick();
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
        <h1>Agregar nueva Universidad</h1>
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
              placeholder="ingresa el nombre de la universidad"
              required
            />
          </div>
          <div className="create_formDiv">
            <label htmlFor="acronym">
              Acrónimo <b>*</b>
            </label>
            <input
              {...register('acronym')}
              id="acronym"
              type="text"
              placeholder="ingresa el acrónimo de la universidad"
              required
            />
          </div>
          <div className="create_formDiv">
            <label htmlFor="linkImg">
              Insignia de la Universidad <b>*</b>
            </label>
            <div className="custom-file-input">
              <input
                id="linkImg"
                type="file"
                onChange={handleImageChange}
                required
                style={{
                  opacity: 0,
                  position: 'absolute',
                  zIndex: -1,
                }}
              />
              {!selectedImage ? (
                <div
                  onClick={handleOnClickImg}
                  className="custom_selecctImg"
                >
                  <i className="bx bxs-image-add"></i>
                  <p>Selecciona una Imagen</p>
                </div>
              ) : (
                <div className="image__preview">
                  <img
                    src={selectedImage}
                    alt="Preview"
                    onClick={handleOnClickImg}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="create_formDiv">
            <label htmlFor="location">
              Ubicación <b>*</b>
            </label>
            <input
              {...register('location')}
              id="location"
              type="text"
              placeholder="ingresa la Ubicación de la universidad"
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

export default CreateUniversity;
