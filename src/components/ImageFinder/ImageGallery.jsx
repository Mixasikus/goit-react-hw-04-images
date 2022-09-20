import ImageGalleryItem from './ImageGalleryItem';
import { GalleryList } from './Image.module';

export default function ImageGallery({ images, onClick, dataModal }) {
  return (
    <GalleryList>
      {images.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          webformatURL={webformatURL}
          onClick={() => {
            dataModal(tags, largeImageURL);
            onClick();
          }}
        />
      ))}
    </GalleryList>
  );
}
