import { GalleryItem, Img } from './Image.module';

export default function ImageGalleryItem({ webformatURL, tags, onClick }) {
  return (
    <>
      <GalleryItem>
        <Img src={webformatURL} alt={tags} onClick={onClick} />
      </GalleryItem>
    </>
  );
}
