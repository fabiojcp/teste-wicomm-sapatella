import Image from "next/image";
import * as S from "./styles";
import Link from "next/link";

export const ProductsSectionHighlight = () => {
  return (
    <S.Wrapper>
      <S.FromTop>
        <S.Title>Rasteiras & Birkens</S.Title>
        <S.Description>
          A categoria de Sandália Rasteira da Sapatella é um verdadeiro paraíso
          para os amantes de conforto e estilo.
        </S.Description>

        <Link href="/">
          <S.Link>
            Eu quero
            <Image
              src="/assets/icons/arrowRight.svg"
              width={24}
              height={24}
              priority
              alt="Seta para direita preta"
            />
          </S.Link>
        </Link>

        <Image
          src="/assets/images/highLight/0.png"
          width={376}
          height={302}
          priority
          alt="Foto de pés de uma mulher com rasteiras brancas"
        />
      </S.FromTop>

      <S.FromBottom>
        <Image
          src="/assets/images/highLight/1.png"
          width={376}
          height={456}
          priority
          alt="Foto de pés de uma mulher com sandália rosa"
        />

        <Link href="/" style={{ position: "absolute", bottom: "-24px" }}>
          <S.Link>
            Sandálias
            <Image
              src="/assets/icons/arrowRight.svg"
              width={24}
              height={24}
              priority
              alt="Seta para direita preta"
            />
          </S.Link>
        </Link>
      </S.FromBottom>

      <S.FromBottom style={{ alignItems: "center", textAlign: "center" }}>
        <Image
          src="/assets/images/highLight/2.png"
          width={376}
          height={354}
          priority
          alt="Foto de pés de uma mulher com tênis branco"
        />

        <S.Title>Tênis</S.Title>

        <S.Description>
          Os tênis femininos se tornaram um item
          <br /> básico na moda e nos calçados do dia a dia.
        </S.Description>

        <Link
          href="/"
          style={{
            position: "absolute",
            bottom: "-24px",
            margin: "0 auto !important",
          }}
        >
          <S.Link>
            Conferir
            <Image
              src="/assets/icons/arrowRightFill.svg"
              width={24}
              height={24}
              priority
              alt="Seta para direita preta"
            />
          </S.Link>
        </Link>
      </S.FromBottom>
    </S.Wrapper>
  );
};

export default ProductsSectionHighlight;
