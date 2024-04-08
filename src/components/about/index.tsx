import Image from "next/image";
import { texts } from "./static";
import * as S from "./styles";

const About = () => {
  const { title, description } = texts;
  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.TextWrapper>

      <S.ImageWrapper>
        <Image
          src="/assets/images/girlInGrandstand.png"
          alt="mulher sentada em uma arquibancada de um estádio"
          width={376}
          height={320}
        />
      </S.ImageWrapper>
    </S.Wrapper>
  );
};

export default About;
