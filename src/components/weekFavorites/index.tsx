import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import * as S from "./styles";
import { products } from "./static";
import ProductCard from "../productCard";

const WeekFavorites: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Title>Favoritos da Semana</S.Title>

      <S.ProductsWrapper>
        <Swiper
          className="mySwiper"
          navigation={true}
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
            // el: pagination.current,
            // renderBullet: (idx, className) => {
            //   return RenderBullets(idx, className);
            // },
          }}
          slidesPerGroup={4}
          slidesPerView={4}
          loop
          nested={true}
        >
          {Array.from({ length: 12 }, (_, index) => products[index % 4]).map(
            (item, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProductCard item={item} />
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </S.ProductsWrapper>
    </S.Wrapper>
  );
};

export default WeekFavorites;
