import { styled } from "goober";

export const Wrapper = styled("section")`
  display: flex;
  width: 100%;
  padding: 40px 5% 100px 5% !important;
  justify-content: space-between;

  background-color: var(--lightGrey);

  > article > a > span,
  > article > a > span > img {
    cursor: pointer;
  }
`;

export const FromTop = styled("article")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 24px;

  width: 376px;
  height: 456px;
`;

export const FromBottom = styled("article")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 24px;
  position: relative;
  height: 456px;

  width: 376px;
`;

export const Title = styled("h2")`
  margin-bottom: -16px !important;
  font-size: 20px !important;
`;

export const Description = styled("p")`
  font-size: 12px !important;
`;

export const Link = styled("span")`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;

  font-size: 16px !important;
  line-height: 20px !important;

  column-gap: 16px;

  color: var(--black4F) !important;

  position: absolute;
`;
