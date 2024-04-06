import Image from "next/image";
import * as S from "./styles";
import Link from "next/link";

const BannerModal = () => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Hashtag>#SuperBazar</S.Hashtag>
        <S.Description>
          até <b>50%OFF</b>
        </S.Description>
      </S.TitleWrapper>

      <S.ImageWrapper>
        <Image
          src="/assets/banners/bannerModal.png"
          alt="Sandálias douradas"
          width={412}
          height={390}
        />
      </S.ImageWrapper>

      <S.ButtonWrapper>
        <Link href="/">
          <p>Conferir</p>
        </Link>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default BannerModal;
