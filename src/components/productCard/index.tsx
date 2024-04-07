import Image from "next/image";
import * as S from "./styles";
import { useState } from "react";

interface ProductCardProps {
  imgSrc: string;
  imgAlt: string;
  discount?: number;
  sizes: number[];
  title: string;
  price: string;
  priceColor?: string;
  oldPrice: string;
  installments: string;
}

const ProductCard = ({ item }: { item: ProductCardProps }) => {
  const {
    imgSrc,
    imgAlt,
    discount,
    sizes,
    title,
    price,
    priceColor,
    oldPrice,
    installments,
  } = item;

  const [like, setLike] = useState(false);

  return (
    <S.Wrapper>
      <S.ImgWrapper>
        <Image src={imgSrc} alt={imgAlt} width={277} height={277} priority />

        {discount && <S.ImgPromo>{discount}% OFF</S.ImgPromo>}

        <S.ImgIcon like={like ? 1 : 0}>
          <Image
            src="/assets/icons/heartLineBlack.svg"
            alt="Heart icon"
            width={24}
            height={24}
            priority
            onClick={() => {
              setLike(!like);
            }}
          />
        </S.ImgIcon>

        <S.InfoWrapper>
          <S.InfoTitle>Selecione um tamanho</S.InfoTitle>
          {sizes.map((size, index) => (
            <S.InfoSizes key={index}>{size}</S.InfoSizes>
          ))}
          <S.InfoButton>Adicionar à sacola</S.InfoButton>
        </S.InfoWrapper>
      </S.ImgWrapper>

      <S.TextWrapper>
        <S.TextTitle>{title}</S.TextTitle>
        <S.TextPrice style={{ color: priceColor || "var(--black)" }}>
          R$ {price}
          <span>R$ {oldPrice}</span>
        </S.TextPrice>
        <S.TextInstallments>{installments}</S.TextInstallments>
      </S.TextWrapper>
    </S.Wrapper>
  );
};

export default ProductCard;
