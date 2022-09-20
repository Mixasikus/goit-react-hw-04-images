import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Image.module';

export default class SearchBar extends Component {
  state = {
    searchImage: '',
  };

  handleImageChange = e => {
    this.setState({ searchImage: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchImage.trim() === '') {
      return toast.error('Введите в строке поиска');
    }

    this.props.onChange(this.state.searchImage);
    this.setState({ searchImage: '' });
  };

  render() {
    return (
      <SearchBarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchImage}
            onChange={this.handleImageChange}
          />
        </SearchForm>
      </SearchBarHeader>
    );
  }
}
