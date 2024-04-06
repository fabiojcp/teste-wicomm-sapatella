import { styled } from "goober";

export const Wrapper = styled("section")`
  width: 100%;
  height: 112px;
  display: flex;
  background-color: var(--lightGrey);
  align-items: center;
  justify-content: space-between;
  padding: 0 5% !important;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    padding: 20px 5% !important;
    height: fit-content;
  }
`;

export const Items = styled("figure")`
  display: flex;
  align-items: center;
  column-gap: 10px;

  @media (max-width: 1000px) {
    width: 50%;
  }

  @media (max-width: 450px) {
    width: 100%;
    margin: 0 auto !important;
  }
`;

export const Caption = styled("figcaption")`
  color: var(--black4F) !important;
  font-size: 16px !important;
`;
