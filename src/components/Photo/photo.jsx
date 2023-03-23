import { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";

const Photo = () => {
  const { idAlbum, idPhoto } = useParams();

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums/${idAlbum}/photos/`)
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .then(function (json) {
        setPhotos(json);
        console.log(photos);
      })
      .catch(function (error) {
        alert(error);
      });
  });

  return (
    <main>
     
      {photos
      .filter((item) => item.id === Number(idPhoto))
      .map((item) => (
        <div key={item.id} className="max-w-150 flex flex-col my-2 items-center">
          <h2 className="flex flex-col max-w-1">Nome Photo: <span className="text-lg font-bold my-2">{item.title}</span></h2>
          <img className="max-w-600 w-60" src={item.url}/>
        </div>
      ))}
       <Link to={"/"}>
        <button className="m-2 bg-gray-900 p-5 text-xl text-gray-100 rounded-full py-3 px-6">Voltar Para Home</button>
      </Link>
    </main>
  );
};

export default Photo;
