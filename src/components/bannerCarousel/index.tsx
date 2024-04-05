import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import * as S from "./styles";
import CarouselItem from "./carouselItem";

interface BannerCarouselProps {
  items: {
    image: {
      src: string;
      alt: string;
    };
    children?: React.ReactNode;
  }[];
}

const BannerCarousel = ({ items }: BannerCarouselProps) => {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <S.Wrapper>
      <Swiper
        className="mySwiper"
        navigation={true}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
      >
        {items.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <CarouselItem image={item.image}>
                {item?.children && item.children}
              </CarouselItem>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </S.Wrapper>
  );
};

export default BannerCarousel;
