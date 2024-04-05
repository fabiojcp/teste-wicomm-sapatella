import { styled } from "goober";

export const Label = styled("label")<{ styled?: string }>`
  position: relative;
  width: clamp(4rem, 230px, 230px) !important;
  height: 36px;
  background: var(--white30);
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.25);

  &::placeholder {
    color: var(--neutral-300);
    font-size: 1rem;
  }

  &:hover {
    &::placeholder {
      color: var(--lightGrey);
    }
  }

  &:focus {
  }

  ${({ styled }) => styled}

  > img {
    width: 18px;
    height: 18px;
    color: white;
    fill: white;
    position: absolute;
    right: 10px;
    cursor: pointer;
    top: 9px;
    ${({ styled }) => styled}
  }
`;

export const Icon = styled("img")<{ styled?: string }>`
  width: 18px;
  height: 18px;
  color: white;
  fill: white;
  position: absolute;
  right: 10px;
  cursor: pointer;
  top: 9px;
  ${({ styled }) => styled}
`;

export const Input = styled("input")`
  opacity: 0.3;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  border: 1px solid var(--lightGrey);
  outline: none !important;

  &:focus,
  &:focus-visible,
  &:focus-within {
    outline: none !important;
  }

  &:placeholder {
    padding: 0 2rem;
  }
  &-webkit-search-cancel-button {
    display: none;
  }
`;
