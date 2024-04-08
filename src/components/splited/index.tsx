import Image from "next/image";
import * as S from "./styles";
import WeekFavorites from "../weekFavorites";

const SplitedSection = () => {
  return (
    <S.Wrapper>
      <Image
        src="/assets/images/multiCarousel/image1.png"
        alt="duas mulheres com roupas de carnaval"
        width={594}
        height={479}
      />

      <WeekFavorites
        props={{
          totalSlides: 6,
          slidesPerGroup: 2,
          slidesPerView: 2,
          spaceBetween: 10,
        }}
      />
    </S.Wrapper>
  );
};

export default SplitedSection
