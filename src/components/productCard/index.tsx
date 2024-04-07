import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import * as S from "./styles";
import useLocalStorage from "@/hooks/useLocalStorage";
import { NavigationOptions } from "swiper/types";

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
  const [sizeSelected, setSizeSelected] = useState<number | undefined>(
    undefined
  );

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <S.Wrapper>
      <S.ImgWrapper>
        <Image src={imgSrc} alt={imgAlt} width={277} height={277} priority />

        {discount && <S.ImgPromo>{discount}% OFF</S.ImgPromo>}

        <S.ImgIcon>
          <Image
            src={
              like
                ? "/assets/icons/heartFullPink.svg"
                : "/assets/icons/heartLineBlack.svg"
            }
            alt="Heart icon"
            width={24}
            height={24}
            priority
            onClick={() => setLike(!like)}
          />
        </S.ImgIcon>

        <S.InfoWrapper id="info-wrapper">
          <S.InfoTextWrapper id="swiper-button-custom">
            <S.InfoTitle>Selecione um tamanho</S.InfoTitle>
            <Swiper
              className="mySwiper"
              navigation={{
                enabled: true,
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              modules={[Navigation]}
              slidesPerView={5}
              nested={true}
              spaceBetween={1}
              allowTouchMove={false}
              onSwiper={(swiper) => {
                // Delay execution for the refs to be defined
                setTimeout(() => {
                  if (swiper?.params?.navigation) {
                    const navigationOptions = swiper.params
                      .navigation as NavigationOptions;
                    navigationOptions.prevEl = navigationPrevRef.current;
                    navigationOptions.nextEl = navigationNextRef.current;

                    // Re-init navigation
                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }
                });
              }}
            >
              {sizes.map((size, index) => (
                <SwiperSlide key={index} onClick={() => setSizeSelected(index)}>
                  <S.InfoSizes
                    selected={sizeSelected && sizeSelected === index ? 1 : 0}
                  >
                    {size}
                  </S.InfoSizes>
                </SwiperSlide>
              ))}
            </Swiper>
            <div ref={navigationPrevRef} className="swiper-button-prev-custom">
              <Image
                src="/assets/icons/chevron.svg"
                alt="Next button"
                width={24}
                height={24}
                priority
              />
            </div>
            <div
              ref={navigationNextRef}
              className="swiper-button-next-custom"
              onClick={(e) => console.log(e)}
            >
              <Image
                src="/assets/icons/chevron.svg"
                alt="Previous button"
                width={24}
                height={24}
                priority
              />
            </div>
          </S.InfoTextWrapper>
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
