import Seo from "@/components/Seo";
import BannerCarousel from "@/components/bannerCarousel";
import BannerModal from "@/components/bannerModal";
import MultiCarousel from "@/components/multiCarousel";
import PaymentBanner from "@/components/paymentBanner";
import ProductsSections from "@/components/productsSection";
import WeekFavorites from "@/components/weekFavorites";

import * as Static from "@/static";

const HomePage = () => {
  return (
    <>
      <Seo
        title="Sapatella"
        description="Oi, a gente já se conhece? Muito prazer, Sapatella! Somos uma Marca de moda que oferece sapatos e acessórios feitos para te encantar. Vamos juntas?"
      />
      <BannerCarousel
        items={Array.from({ length: 3 }, () => Static.bannerCarouselItems)}
      />

      <PaymentBanner />
      <ProductsSections />

      <MultiCarousel item={Static.multiCarouselItems} />

      <WeekFavorites />
    </>
  );
};

export default HomePage;
