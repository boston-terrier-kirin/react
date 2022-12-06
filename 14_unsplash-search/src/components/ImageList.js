import ImageShow from './ImageShow';
import './ImageList.css';

const ImageList = ({ images }) => {
  const imagesToRender = images.map((image) => (
    <ImageShow key={image.id} image={image} />
  ));
  return <div className="image-list">{imagesToRender}</div>;
};

export default ImageList;
