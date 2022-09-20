import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Image.module';

export default function SearchBar({ onChange }) {
  const [searchImage, setSearchImage] = useState('');

  const handleImageChange = e => {
    setSearchImage(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchImage.trim() === '') {
      return toast.error('Введите в строке поиска');
    }

    onChange(searchImage);
    setSearchImage('');
  };

  return (
    <SearchBarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchImage}
          onChange={handleImageChange}
        />
      </SearchForm>
    </SearchBarHeader>
  );
}
