import { styled } from "goober";

export const Wrapper = styled("section")`
  background-color: var(--lightGrey);

  padding: 35px 0 34px 0 !important;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100% !important;
`;

export const Content = styled("article")`
  display: flex;
  flex-direction: column;
  row-gap: 13px;
`;

export const Title = styled("h2")`
  font-size: 20px !important;
  color: var(--black4F) !important;
  text-align: center;

  > b {
    color: var(--pink) !important;
    font-weight: bold;
  }
`;

export const Form = styled("form")`
  display: flex;
  column-gap: 20px;
`;

export const Input = styled("input")`
  padding: 11px 12px !important;
  border: 1px solid var(--black02) !important;

  width: 277px !important;
  height: 40px !important;

  font-size: 14px !important;
  color: var(--black02) !important;
`;

export const Button = styled("button")`
  cursor: pointer;

  width: 178px !important;
  height: 40px !important;

  font-size: 14px !important;
  color: var(--white);

  background-color: var(--pink);
  display: flex;
  justify-content: center;
  align-items: center;
`;
