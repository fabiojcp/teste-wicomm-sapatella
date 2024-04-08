import { styled } from "goober";

export const Wrapper = styled("section")`
  width: 100%;
  height: 422px;
  max-width: 1280px !important;
   margin: 0 auto !important;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 36px;
`;

export const Title = styled("h2")`
  font-size: 24px !important;
  line-height: 32px !important;
  margin: 0 auto !important;
`;

export const Sections = styled("article")`
  width: 100%;
  display: flex;
  padding: 0 5% !important;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Section = styled("figure")`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
`;

export const Caption = styled("figcaption")`
  font-size: 16px !important;
  line-height: 22px !important;
  color: var(--black4F);
  cursor: pointer;
`;
