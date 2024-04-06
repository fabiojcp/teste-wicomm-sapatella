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

    > p {
      font-size: 16px !important;
      line-height: 24px;
      font-weight: normal;
      color: var(--white);
    }
    > p:after {
      background: none repeat scroll 0 0 transparent;
      content: "";
      display: block;
      height: 2px;
      left: 25%;
      position: absolute;
      background: #fff;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }
  }

  &:hover {
    background-color: var(--pinkLight);

    > a > p:after {
      width: 50%;
      left: 25%;
    }
  }
`;
