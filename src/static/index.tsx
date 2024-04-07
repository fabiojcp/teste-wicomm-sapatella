import BannerModal from "@/components/bannerModal";

export const bannerCarouselItems = {
  image: {
    src: "/assets/banners/banner.png",
    alt: "ícone de uma lupa",
  },
  children: <BannerModal />,
};

export const multiCarouselItems = {
  title: "Pra brilhar no verão",
  text: "As  são uma escolha de calçado atemporal e icônica, conhecida por seu conforto, qualidade e design diferenciado.",
  button: "É a minha cara",
  images: [
    {
      src: "/assets/images/multiCarousel/image1.png",
      alt: "mulher dentro de carrinho de supermercado",
    },
    {
      src: "/assets/images/multiCarousel/image2.png",
      alt: "duas mulheres com roupas de carnaval",
    },
  ],
};
