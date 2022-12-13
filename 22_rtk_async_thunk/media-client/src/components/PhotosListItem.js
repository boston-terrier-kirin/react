import { useRemovePhotoMutation } from '../store';
import Button from './Button';

const PhotosListItem = ({ photo }) => {
  const [removePhoto, removePhotoResults] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };

  return (
    <div className="flex flex-col relative cursor-pointer">
      <img src={photo.url} alt={`#${photo.id}`} />
      <div className="absolute inset-0 opacity-0 hover:opacity-100">
        <Button
          danger
          rounded
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          onClick={handleRemovePhoto}
          loading={removePhotoResults.isLoading}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default PhotosListItem;
