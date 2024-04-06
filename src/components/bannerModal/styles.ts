import { styled } from "goober";

export const Wrapper = styled("dialog")`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 412px;
  aspect-ratio: 206 / 227;
  top: 110px;
  left: 0;
  margin: auto auto !important;
`;

export const TitleWrapper = styled("section")`
  display: flex;
  justify-content: space-between;
  background-color: var(--white);
  padding: 17px 24px !important;
`;

export const Hashtag = styled("h2")`
  font-size: 24px !important;
  line-height: 32px;
`;

export const Description = styled("span")`
  font-size: 14px !important;
  line-height: 32px;

  > b {
    color: var(--pink);
    font-size: 24px !important;
    line-height: 32px;
    font-weight: bold;
  }
`;

export const ImageWrapper = styled("section")``;

export const ButtonWrapper = styled("section")`
  width: 156px;
  aspect-ratio: 13 / 4;
  background-color: var(--pink);
  position: absolute;
  bottom: -20px;
  left: calc(50% - 78px);
  margin: auto auto !important;

  > a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px !important;
    line-height: 24px;
    font-weight: normal;
    color: var(--white);
  }

  &:hover {
    background-color: var(--pinkLight);
  }
`;
