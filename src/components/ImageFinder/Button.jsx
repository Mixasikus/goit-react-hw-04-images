import { ButtonLoad, ButtonContainer } from './Image.module';

export default function Button({ onClick }) {
  return (
    <ButtonContainer>
      <ButtonLoad type="button" onClick={onClick}>
        Load more
      </ButtonLoad>
    </ButtonContainer>
  );
}
