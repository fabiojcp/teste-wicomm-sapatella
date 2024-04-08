import BannerModal from "@/components/bannerModal";

export const bannerCarouselItems = {
  image: {
    src: "/assets/banners/banner.webp",
    alt: "mulher com roupa rosa",
  },
  children: <BannerModal />,
};

export const multiCarouselItems = {
  title: "Pra brilhar no verão",
  text: "As  são uma escolha de calçado atemporal e icônica, conhecida por seu conforto, qualidade e design diferenciado.",
  button: "É a minha cara",
  images: [
    {
      src: "/assets/images/multiCarousel/image1.webp",
      alt: "mulher dentro de carrinho de supermercado",
    },
    {
      src: "/assets/images/multiCarousel/image2.webp",
      alt: "duas mulheres com roupas de carnaval",
    },
  ],
};
