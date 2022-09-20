import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { updateFetch } from 'components/services/pixabay.api';

import SearchBar from './ImageFinder/SearchBar';
import ImageGallery from './ImageFinder/ImageGallery';
import Button from './ImageFinder/Button';
import Modal from './ImageFinder/Modal';
import { Img } from './ImageFinder/Image.module';

export default function App() {
  const [searchImage, setSearchImage] = useState('');
  const [images, setImages] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState({});

  useEffect(() => {
    if (!searchImage) {
      return;
    }
    updateFetch(searchImage, page).then(response => {
      const nextImages = response.data.hits;
      setImages(state => [...state, ...nextImages]);
    });
  }, [searchImage, page]);

  const toggleModal = () => {
    setShowModal(state => (state = !state));
  };

  const onLoadMore = () => {
    setPage(state => state + 1);
  };

  const handleFormSubmit = searchImage => {
    setSearchImage(searchImage);
    setPage(1);
    setImages('');
  };

  const dataModal = (tags, largeImageURL) => {
    setCurrentImage({ tags, largeImageURL });
  };

  return (
    <>
      <SearchBar onChange={handleFormSubmit} />
      {images.length > 0 && (
        <>
          <ImageGallery
            onClick={toggleModal}
            images={images}
            dataModal={dataModal}
          />
          <Button onClick={onLoadMore} />
        </>
      )}
      {showModal && (
        <Modal onClose={toggleModal}>
          <Img src={currentImage.largeImageURL} alt={currentImage.tags} />
        </Modal>
      )}
      <ToastContainer autoClose={3000} />
    </>
  );
}
