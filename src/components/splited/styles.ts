import { styled } from "goober";

export const Wrapper = styled("section")`
  display: flex;
  justify-content: flex-start;
  padding: 72px 0 !important;
  column-gap: 56px;
  margin: 0 auto !important;

  > section {
    padding: 0 !important;

    > div {
      width: calc(100% - 650px) !important;
    }
  }

  .swiper-slide {
    /* width: 277px !important; */
  }
`;
