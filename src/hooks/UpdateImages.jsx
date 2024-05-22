import React, { useEffect, useState } from 'react';
import './hooksStyle/UpdateImages.css';
import axios from 'axios';
import config from '../utils/getToken';

const UpdateImages = ({
  rutaLink,
  arrayImages,
  data,
  addImage,
  setaddImage,
  setCrud,
}) => {
  const [selectImage, setselectImage] = useState();
  const [createImage, setcreateImage] = useState(false);
  const missingImages = Math.max(0, 4 - arrayImages.length);

  const deleteImage = (photo) => {
    const url = `${import.meta.env.VITE_URL_API}/${rutaLink}/${
      photo.id
    }`;

    axios
      .delete(url, config)
      .then((res) => {
        console.log(res);
        setaddImage(!addImage);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postImage = () => {
    const formData = new FormData();
    formData.append('linkImg', selectImage);
    const url = `${import.meta.env.VITE_URL_API}/${rutaLink}/${
      data.id
    }`;

    axios
      .post(url, formData, config)
      .then((res) => {
        console.log(res);
        setaddImage(!addImage);
        setcreateImage(false);
      })
      .catch((err) => {
        console.log(err);
        setcreateImage(false);
      });
  };
  useEffect(() => {
    if (createImage) {
      postImage();
    }
  }, [createImage]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    file.type.startsWith('image/');

    setselectImage(file);
    setcreateImage(true);
  };

  const handleOnClickImg = () => {
    document.getElementById(`linkImg`).click();
  };

  console.log(arrayImages);
  return (
    <div className="UpdateImagesHotel__container">
      <section className="UpdateImagesHotel__sectionOne">
        <button
          className="UpdateImagesHote__closeContainer"
          onClick={() => setCrud()}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.25 6.25012L23.7488 23.7489"
              stroke="#FF595A"
              stroke-width="3.07095"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.25118 23.7489L23.75 6.25012"
              stroke="#FF595A"
              stroke-width="3.07095"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        {arrayImages?.map((photo) => (
          <article
            key={photo.id}
            className="UpdateImagesHotel__Image"
          >
            <img
              src={`${import.meta.env.VITE_URL_IMG}/${photo.linkImg}`}
              alt=""
            />
            <button
              onClick={() => {
                deleteImage(photo);
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.20312 5.20831L19.7855 19.7907"
                  stroke="#FF595A"
                  stroke-width="3.07095"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.20671 19.7907L19.7891 5.20831"
                  stroke="#FF595A"
                  stroke-width="3.07095"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </article>
        ))}
        <input
          type="file"
          onChange={handleFileChange}
          id="linkImg"
          style={{ display: 'none' }}
        />{' '}
        {[...Array(missingImages)].map((_, index) => (
          <article
            key={index}
            className="UpdateImagesHotel__notImage"
            onClick={handleOnClickImg}
          >
            <button>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.75 13.2813H6.25C5.82292 13.2813 5.46875 12.9271 5.46875 12.5C5.46875 12.0729 5.82292 11.7188 6.25 11.7188H18.75C19.1771 11.7188 19.5313 12.0729 19.5313 12.5C19.5313 12.9271 19.1771 13.2813 18.75 13.2813Z"
                  fill="white"
                  stroke="white"
                  stroke-width="2.0473"
                />
                <path
                  d="M12.4961 19.5313C12.069 19.5313 11.7148 19.1771 11.7148 18.75V6.25C11.7148 5.82292 12.069 5.46875 12.4961 5.46875C12.9232 5.46875 13.2773 5.82292 13.2773 6.25V18.75C13.2773 19.1771 12.9232 19.5313 12.4961 19.5313Z"
                  fill="white"
                  stroke="white"
                  stroke-width="2.0473"
                />
              </svg>
            </button>
          </article>
        ))}
      </section>
    </div>
  );
};

export default UpdateImages;
