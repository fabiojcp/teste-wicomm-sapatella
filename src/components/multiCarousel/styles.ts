import { keyframes, styled } from "goober";

export const Wrapper = styled("section")`
  height: 60vh;
  width: 100%;
  background-color: var(--lightGrey) !important;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 4% 15% !important;
  column-gap: 10%;

  .swiper {
    display: flex;
    justify-content: flex-end;
  }

  .swiper-slide {
    background-color: transparent;
  }
`;

const progressBar = keyframes`
  0% {width: 0;}
  100% {width:100%;}
`;

export const TextWrapper = styled("article")`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;

  #swiper-custom-pagination {
    display: flex;
    overflow-x: visible;
    margin-bottom: 20px !important;
  }

  .swiper-pagination-bullet {
    height: 4px !important;
    width: 150px !important;
    border-radius: 0 !important;
    background-color: var(--black03) !important;
    transition: all 0.3s ease-in-out !important;
    opacity: 1 !important;
  }

  .swiper-pagination-bullet:not(:last-child) {
    margin-right: 8px !important;
  }

  .swiper-pagination-bullet-active {
    position: relative;

    b {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 2;
      width: 0%;
      height: 100%;
      background-color: var(--pink) !important;

      animation-name: ${progressBar};
      animation-duration: 3s;
      animation-timing-function: linear;
      animation-iteration-count: 1;
      animation-direction: alternate;
      animation-fill-mode: forwards;
    }
  }
`;

export const Title = styled("h2")`
  font-size: 20px !important;
  color: var(--black4F);
  text-align: left;
`;

export const Text = styled("p")`
  font-size: 12px !important;
  color: var(--black4F);
  text-align: left;
`;

export const Button = styled("button")`
  width: 150px;
  height: 48px;
  background-color: var(--pink);
  color: var(--white);

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const ImageWrapper = styled("figure")`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 287 / 201;
  width: 80%;
  margin-left: 10% !important;

  > img {
    object-fit: cover;
    height: 100%;
  }
`;
