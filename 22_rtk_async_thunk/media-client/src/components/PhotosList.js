import { useFetchPhotosQuery, useAddPhotoMutation } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import PhotosListItem from './PhotosListItem';

const PhotosList = ({ album }) => {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={3} className="h-10 w-full" />;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    content = data.map((photo) => (
      <PhotosListItem key={photo.id} photo={photo} />
    ));
    content = <div className="flex flex-wrap gap-3">{content}</div>;
  }

  return (
    <div>
      <div className="m-2 flex justify-between items-center">
        <h3 className="text-lg font-bold">Photos in {album.title}</h3>
        <Button
          primary
          outline
          rounded
          onClick={handleAddPhoto}
          loading={addPhotoResults.isLoading}
        >
          Add Photo
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default PhotosList;
