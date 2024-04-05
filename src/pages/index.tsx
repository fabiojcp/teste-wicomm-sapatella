import Seo from "@/components/Seo";
import BannerCarousel from "@/components/bannerCarousel";

const HomePage = () => {
  return (
    <>
      <Seo
        title="Sapatella"
        description="Oi, a gente já se conhece? Muito prazer, Sapatella! Somos uma Marca de moda que oferece sapatos e acessórios feitos para te encantar. Vamos juntas?"
      />
      <BannerCarousel
        items={[
          {
            image: {
              src: "/assets/banners/banner.png",
              alt: "ícone de uma lupa",
            },
          },
          {
            image: {
              src: "/assets/banners/banner.png",
              alt: "ícone de uma lupa",
            },
          },
          {
            image: {
              src: "/assets/banners/banner.png",
              alt: "ícone de uma lupa",
            },
          },
        ]}
      />
    </>
  );
};

export default HomePage;
