import { SwiperSlide } from "swiper/react";
import * as S from "./styles";
import Image from "next/image";

interface CarouselItemProps {
  image: {
    src: string;
    alt: string;
  };
  children?: React.ReactNode;
}

export const CarouselItem = ({ image, children }: CarouselItemProps) => {
  return (
    <S.Wrapper>
      <Image
        src={image.src}
        alt={image.alt}
        width={1920}
        height={1080}
        quality={100}
        priority
      />
      {children && children}
    </S.Wrapper>
  );
};

export default CarouselItem;
