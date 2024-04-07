import { keyframes, styled } from "goober";

export const Wrapper = styled("article")`
  width: 277px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  &:hover,
  &:focus-within,
  &:focus-visible,
  &:active,
  &:focus {
    #info-wrapper {
      bottom: 0;
    }
  }
`;

export const ImgWrapper = styled("div")`
  position: relative;
  overflow: hidden !important;

  > img {
    cursor: pointer;
  }
`;

export const ImgPromo = styled("div")`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 6px 12px !important;
  background-color: var(--pink);
  color: var(--white);
  font-size: 12px !important;
`;

export const ImgIcon = styled("div")`
  position: absolute;
  top: 10px;
  right: 10px;

  > img {
    cursor: pointer !important;
  }
`;

export const InfoWrapper = styled("div")`
  position: absolute;
  bottom: -97.2px;
  left: 0;
  width: 100%;
  transition: all 0.3s ease;
`;

export const InfoTextWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0 !important;
  row-gap: 8px;

  background-color: var(--black03);
  opacity: 0.8;

  .swiper {
    margin: 0 40px !important;
    width: calc(100% - 80px) !important;
    background-color: transparent !important;
    overflow: hidden !important;
  }

  .swiper-wrapper {
  }
  .swiper-slide {
    background-color: transparent !important;
  }

  .swiper-button-prev-custom {
    position: absolute;
    left: 10px !important;
    bottom: 44px !important;
  }

  .swiper-button-next-custom {
    position: absolute;
    right: 10px !important;
    bottom: 44px !important;
    transform: rotate(180deg);
  }

  .swiper-button-disabled {
    opacity: 0.3 !important;
  }
`;

export const InfoTitle = styled("p")``;

export const InfoSizes = styled<{ selected: 0 | 1 }>("span")`
  font-size: 12px !important;
  padding: 6px !important;
  background-color: ${({ selected }) =>
    selected ? "var(--pink)" : "var(--white)"} !important;
  color: ${({ selected }) =>
    selected ? "var(--white)" : "var(--black)"} !important;
  border: ${({ selected }) =>
    selected ? "1px solid var(--pink)" : "1px solid var(--black03)"} !important;
  cursor: pointer !important;
`;

export const InfoButton = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 0 !important;
  color: var(--white);
  background-color: var(--pink);
  width: 100%;
  cursor: pointer !important;
`;

export const TextWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 4px;
  padding-top: 12px;
`;

export const TextTitle = styled("h3")`
  font-size: 12px !important;
  line-height: 20px !important;
  margin-bottom: 12px !important;
`;

export const TextPrice = styled("p")`
  vertical-align: middle !important;
  font-size: 16px !important;
  line-height: 22px !important;

  > span {
    font-size: 12px !important;
    text-decoration: line-through !important;

    margin-left: 7px !important;
  }
`;

export const TextInstallments = styled("p")`
  font-size: 12px !important;
`;
