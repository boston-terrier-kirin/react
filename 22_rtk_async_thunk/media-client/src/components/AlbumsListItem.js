import { GoTrashcan } from 'react-icons/go';
import { useRemoveAlubmMutation } from '../store';
import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import PhotosList from './PhotosList';

const AlbumsListItem = ({ album }) => {
  const [removeAlubm, removeAlbumResults] = useRemoveAlubmMutation();

  const handleRemoveAlbum = (album) => {
    removeAlubm(album);
  };

  const header = (
    <>
      <Button
        danger
        outline
        loading={removeAlbumResults.isLoading}
        onClick={() => handleRemoveAlbum(album)}
        className="mr-2"
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  );
};

export default AlbumsListItem;
