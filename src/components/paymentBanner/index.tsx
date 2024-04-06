import Image from "next/image";
import * as S from "./styles";
import { paymentItems } from "./static";

const PaymentBanner = () => {
  return (
    <S.Wrapper>
      {paymentItems.map((item, index) => (
        <Items key={index} src={item.src} alt={item.alt} text={item.text} />
      ))}
    </S.Wrapper>
  );
};

export default PaymentBanner;

interface ItemsProps {
  src: string;
  alt: string;
  text: string;
}

const Items = ({ src, alt, text }: ItemsProps) => {
  return (
    <S.Items>
      <Image src={src} alt={alt} width={48} height={48} />

      <S.Caption>{text}</S.Caption>
    </S.Items>
  );
};
