import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { updateFetch } from 'components/services/pixabay.api';

import SearchBar from './ImageFinder/SearchBar';
import ImageGallery from './ImageFinder/ImageGallery';
import Button from './ImageFinder/Button';
import Modal from './ImageFinder/Modal';
import { Img } from './ImageFinder/Image.module';

export default class App extends Component {
  state = {
    searchImage: '',
    images: '',
    page: 1,
    showModal: false,
    currentImage: {},
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchImage, page } = this.state;

    if (prevState.searchImage !== searchImage || prevState.page !== page) {
      updateFetch(searchImage, page).then(response => {
        const prevImages = this.state.images;
        const nextImages = response.data.hits;

        this.setState({
          images: [...prevImages, ...nextImages],
        });
      });
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onLoadMore = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };

  handleFormSubmit = searchImage => {
    this.setState({ searchImage, page: 1, images: '' });
  };

  dataModal = (tags, largeImageURL) => {
    this.setState({ currentImage: { tags, largeImageURL } });
  };

  render() {
    const { images, showModal } = this.state;
    const { largeImageURL, tags } = this.state.currentImage;

    return (
      <>
        <SearchBar onChange={this.handleFormSubmit} />
        {images.length > 0 && (
          <>
            <ImageGallery
              onClick={this.toggleModal}
              images={images}
              dataModal={this.dataModal}
            />
            <Button onClick={this.onLoadMore} />
          </>
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <Img src={largeImageURL} alt={tags} />
          </Modal>
        )}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
