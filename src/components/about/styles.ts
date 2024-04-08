import { styled } from "goober";

export const Wrapper = styled("section")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 133px;

  padding: 72px 10% 92px 10% !important;
`;

export const TextWrapper = styled("article")`
  width: clamp(30%, 461px, 461px);
`;

export const Title = styled("h2")`
  font-size: 24px !important;
  line-height: 32px !important;
`;

export const Description = styled("p")`
  font-size: 14px !important;
  line-height: 20px !important;
`;

export const ImageWrapper = styled("figure")`
  width: 376px;
  height: 320px;

  box-shadow: 20px 20px 0 0 var(--lightGrey);
`;
