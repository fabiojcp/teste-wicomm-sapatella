import Image from "next/image";
import * as S from "./styles";
import { productItems } from "./static";
import React from "react";
import Link from "next/link";

const ProductsSections = () => {
  return (
    <S.Wrapper>
      <S.Title>Compre por categoria</S.Title>

      <S.Sections>
        {productItems.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </S.Sections>
    </S.Wrapper>
  );
};

export default ProductsSections;

interface ItemsProps {
  item: {
    src: string;
    alt: string;
    text: string;
  };
}

const Item = (props: ItemsProps) => {
  const { src, alt, text } = props.item;
  return (
    <Link href="/">
      <S.Section>
        <Image src={src} alt={alt} width={162} height={162} />
        <S.Caption>{text}</S.Caption>
      </S.Section>
    </Link>
  );
};
