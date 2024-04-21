import { getPhotos } from 'apiService/photos';
import { Text, Form, PhotosGallery } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }

    async function getPhotosQuery() {
      try {
        let data = await getPhotos(query, 1);
        setPhotos(data.photos);
      } catch (error) {
        console.log(error.message);
      }
    }

    getPhotosQuery();
  }, [query]);

  function getQuery(value) {
    setQuery(value);
  }

  return (
    <>
      <Form getQuery={getQuery} />
      <PhotosGallery photos={photos} />
      {!photos.length && <Text textAlign="center">Let`s begin search 🔎</Text>}
    </>
  );
};
