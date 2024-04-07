import { styled } from "goober";

export const Wrapper = styled("section")`
  height: 90vh;
  width: 100%;
  position: relative;

  .swiper-button-prev,
  .swiper-button-next {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: var(--white80) !important;
    color: var(--black) !important;

    &:after {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      line-height: 40px;
      font-size: 24px;
      margin: 0 auto !important;
    }
  }

  > div > .swiper-wrapper > .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > div > .swiper-pagination {
    > .swiper-pagination-bullet {
      height: 8px !important;
      width: 8px !important;
      border-radius: 0 !important;
      background-color: var(--black03) !important;
      transition: all 0.3s ease-in-out !important;
      /* box-shadow: 0 0 4px -1px var(--black) !important; */
      filter: drop-shadow(0 0 8px var(--black));
      opacity: 1 !important;
    }

    > .swiper-pagination-bullet:not(:last-child) {
      margin-right: 8px !important;
    }

    > .swiper-pagination-bullet-active {
      width: 16px !important;
      background-color: var(--pink) !important;
    }
  }
`;
