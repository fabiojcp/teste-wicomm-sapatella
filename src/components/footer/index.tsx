import Link from "next/link";
import Image from "next/image";

import Logo from "@/components/logo";

import * as S from "./styles";
import * as Static from "./static";

const SiteMapComponent = ({
  title,
  links,
}: {
  title: string;
  links: { text: string; link?: string }[];
}) => {
  return (
    <S.SiteMap>
      <S.SiteMapTitle>{title}</S.SiteMapTitle>
      <S.SiteMapNav>
        {links.map((item, index) => (
          <Link key={index} href={item.link || "/"}>
            <S.SiteMapLink>{item.text}</S.SiteMapLink>
          </Link>
        ))}
      </S.SiteMapNav>
    </S.SiteMap>
  );
};

const InfoComponent = ({
  title,
  images,
}: {
  title: string;
  images: { src: string; alt: string; width?: number; height?: number }[];
}) => {
  return (
    <S.Info>
      <S.InfoTitle>{title}</S.InfoTitle>

      <S.InfoImages>
        {images.map((item, index) => (
          <Image
            key={index}
            src={item.src}
            alt={item.alt}
            width={item.width || 34}
            height={item.height || 24}
          />
        ))}
      </S.InfoImages>
    </S.Info>
  );
};

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Social>
          <Logo />
          <S.SocialNav>
            {Static.Social.map((item, index) => (
              <Link key={index} href="/">
                <S.SocialLink>
                  <Image src={item.src} alt={item.alt} width={24} height={24} />
                </S.SocialLink>
              </Link>
            ))}
          </S.SocialNav>
        </S.Social>

        <S.SiteMapWrapper>
          <SiteMapComponent {...Static.AboutUs} />
          <SiteMapComponent {...Static.MyAccount} />
          <SiteMapComponent {...Static.Support} />
        </S.SiteMapWrapper>

        <S.InfoWrapper>
          <InfoComponent {...Static.PaymentMethods} />
          <InfoComponent {...Static.Security} />
        </S.InfoWrapper>
      </S.Content>

      <S.DevelopedBy>
        <S.Texts>
          {Static.DevelopedBy.text.map((txt, idx) => (
            <S.Text key={idx}>{txt}</S.Text>
          ))}
        </S.Texts>

        <S.Images>
          {Static.DevelopedBy.images.map((img, idx) => (
            <Image
              key={idx}
              src={img.src}
              alt={img.alt}
              width={img.width || 34}
              height={img.height || 24}
            />
          ))}
        </S.Images>
      </S.DevelopedBy>
    </S.Wrapper>
  );
};

export default Footer;
