import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import * as S from "./styles";
import Image from "next/image";
import Link from "next/link";

interface MultiCarouselProps {
  title: string;
  text: string;
  button: string;
  images: {
    src: string;
    alt: string;
  }[];
}

const MultiCarousel = ({ item }: { item: MultiCarouselProps }) => {
  const { title, text, button, images } = item;

  return (
    <S.Wrapper>
      <S.TextWrapper>
        <div id="swiper-custom-pagination" />

        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
        <Link href="/">
          <S.Button>{button}</S.Button>
        </Link>
      </S.TextWrapper>

      <Swiper
        className="mySwiper"
        navigation={false}
        autoplay={{
          delay: 3000,
          stopOnLastSlide: false,
        }}
        pagination={{
          clickable: true,
          el: "#swiper-custom-pagination",
          renderBullet: (index, className) => {
            return (
              '<span class="' +
              className +
              '">' +
              "<i></i>" +
              "<b></b>" +
              "</span>"
            );
          },
        }}
        loop
        modules={[Autoplay, Pagination]}
        effect="fade"
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <S.ImageWrapper>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={574}
                  height={202}
                  priority
                />
              </S.ImageWrapper>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </S.Wrapper>
  );
};

export default MultiCarousel;
