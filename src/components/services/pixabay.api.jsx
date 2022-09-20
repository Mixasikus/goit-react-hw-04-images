import Axios from 'axios';

export function updateFetch(imageName, page) {
  return Axios.get(
    `https://pixabay.com/api/?key=28495383-c7081478f2b14739d603dcbf8&q=${imageName}&page=${page}`
  );
}
