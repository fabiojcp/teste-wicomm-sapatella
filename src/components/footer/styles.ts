import { styled } from "goober";

export const Wrapper = styled("footer")`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const Content = styled("section")`
  display: flex;
  justify-content: center;
  padding: 48px 0 !important;
  column-gap: 60px;

  border-bottom: 1px solid var(--black02) !important;
`;

export const Social = styled("article")`
  display: flex;
  flex-direction: column;
  row-gap: 36px;
  margin-right: 67.7px;

  > div > a > img {
    filter: invert(1);
  }
`;

export const SocialNav = styled("nav")`
  display: flex;
  column-gap: 32px;
`;

export const SocialLink = styled("div")`
  cursor: pointer;

  * {
    cursor: pointer;
  }
`;

export const SiteMapWrapper = styled("section")`
  display: flex;
  column-gap: 60px;
`;

export const SiteMap = styled("article")`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const SiteMapTitle = styled("h3")`
  font-size: 16px !important;
  line-height: 20px !important;
`;

export const SiteMapNav = styled("nav")`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
`;

export const SiteMapLink = styled("p")`
  cursor: pointer;
  font-size: 14px !important;
  line-height: 20px !important;
  color: var(--black4F);
`;

export const InfoWrapper = styled("section")`
  display: flex;
  flex-direction: column;
  row-gap: 48px;
`;

export const Info = styled("article")`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const InfoTitle = styled("h3")`
  font-size: 16px !important;
  line-height: 20px !important;
`;

export const InfoImages = styled("div")`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 8px;
  width: 160px !important;
`;

export const DevelopedBy = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  padding: 32px 0 !important;
`;

export const Texts = styled("article")`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Text = styled("p")`
  font-size: 12px !important;
  line-height: 18px !important;
  color: var(--black4F);
`;

export const Images = styled("article")`
  display: flex;
  column-gap: 40px;
`;
