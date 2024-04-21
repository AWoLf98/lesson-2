import { Grid, PhotosGalleryItem  } from 'components';

export const PhotosGallery = ({ photos }) => {
  return <Grid>{photos.map((photo) => {
    return <PhotosGalleryItem key={photo.id} {...photo}/>
  })}</Grid>;
};
