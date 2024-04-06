import Seo from "@/components/Seo";
import BannerCarousel from "@/components/bannerCarousel";
import BannerModal from "@/components/bannerModal";
import PaymentBanner from "@/components/paymentBanner";
import ProductsSections from "@/components/productsSection";

const HomePage = () => {
  return (
    <>
      <Seo
        title="Sapatella"
        description="Oi, a gente já se conhece? Muito prazer, Sapatella! Somos uma Marca de moda que oferece sapatos e acessórios feitos para te encantar. Vamos juntas?"
      />
      <BannerCarousel
        items={Array.from({ length: 3 }, () => ({
          image: {
            src: "/assets/banners/banner.png",
            alt: "ícone de uma lupa",
          },
          children: <BannerModal />,
        }))}
      />

      <PaymentBanner />
      <ProductsSections />
    </>
  );
};

export default HomePage;
