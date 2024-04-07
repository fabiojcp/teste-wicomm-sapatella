import React from "react";
import CarouselItem from "./carouselItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import * as S from "./styles";

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
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          stopOnLastSlide: false,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop
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
