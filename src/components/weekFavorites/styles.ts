import { styled } from "goober";

export const Wrapper = styled("section")`
  height: 85vh;
  width: 100%;
  padding: 2% 5% !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 24px;
`;

export const Title = styled("h2")`
  font-size: 24px !important;
  line-height: 32px !important;
  color: var(--black4F);
  text-align: center;
`;

export const ProductsWrapper = styled("div")`
  width: 100%;

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-pagination-bullet {
    height: 8px !important;
    width: 8px !important;
    border-radius: 0 !important;
    background-color: var(--black03) !important;
    transition: all 0.3s ease-in-out !important;
    opacity: 1 !important;
  }

  .swiper-pagination-bullet:not(:last-child) {
    margin-right: 8px !important;
  }

  .swiper-pagination-bullet-active {
    width: 16px !important;
    background-color: var(--pink) !important;
  }
`;
