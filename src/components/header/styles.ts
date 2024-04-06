import { styled } from "goober";

export const Header = styled("header")`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7792366946778712) 0%,
    rgba(0, 0, 0, 0.10696778711484589) 46%,
    rgba(255, 255, 255, 0) 100%
  );
  position: fixed;
  width: 100%;
  height: clamp(72px, 10%, 72px);
  z-index: 1000;

  > label {
    width: 100%;
  }

  &:hover {
    background: var(--white);

    > a,
    > nav > a,
    > a > img {
      color: var(--black) !important;
    }

    > nav:nth-child(2) > a:last-child {
      color: var(--pink) !important;
    }

    > a > img,
    > label > img,
    > nav:nth-child(4) > img {
      filter: invert(1);
    }

    > label > input::-webkit-input-placeholder {
      color: var(--grey) !important;
    }
  }

  > a:first-child {
    margin: 0 4%;
  }

  > nav:nth-child(2) {
    display: flex;
    gap: 2%;
    width: clamp(40%, 100%, 540px);
    white-space: nowrap;
    > a {
      font-size: 16px !important;
      color: var(--white);
    }
  }
`;

export const AnchorLogo = styled("a")`
  margin: 0 4%;
`;

export const NavProducts = styled("nav")`
  display: flex;
  gap: 2%;
  width: clamp(40%, 100%, 540px);
  white-space: nowrap;
`;

export const AnchorProducts = styled("a")`
  font-size: 16px !important;
  color: var(--white);
`;

export const NavIcons = styled("nav")`
  display: flex;
  gap: 24px;
`;
