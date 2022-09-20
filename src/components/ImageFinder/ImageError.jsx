import errorImage from './error.jpg';

export default function ErrorPicture() {
  return (
    <div>
      <img src={errorImage} width="240" alt="sadcat" />
      <p>Ничего не найдено :(</p>
    </div>
  );
}
