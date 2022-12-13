import { GoTrashcan } from 'react-icons/go';
import { useRemoveAlubmMutation } from '../store';
import Button from './Button';
import ExpandablePanel from './ExpandablePanel';

const AlbumsListItem = ({ user, album }) => {
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
    <ExpandablePanel key={album.id} header={header}>
      List of photos in the album
    </ExpandablePanel>
  );
};

export default AlbumsListItem;
