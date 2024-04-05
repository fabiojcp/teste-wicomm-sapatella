import Image from "next/image";
import Link from "next/link";
import Input from "../input";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <Link href="/">
        <Image
          src="/assets/images/logo_sapatella_branco.svg"
          alt="logo-sapatella-white"
          width={183}
          height={72}
          priority={true}
          quality={25}
          style={{ width: 183, height: 72 }}
        />
      </Link>
      <S.NavProducts>
        <Link href="/">Novidades</Link>
        <Link href="/">Sapatos</Link>
        <Link href="/">Sandálias</Link>
        <Link href="/">Tênis</Link>
        <Link href="/">Bolsas & Acessórios</Link>
        <Link href="/">OFF</Link>
      </S.NavProducts>
      <Input
        icon={{
          src: "/assets/icons/search.svg",
          alt: "ícone de uma lupa",
        }}
        type="search"
        name="BuscarProdutos"
      />
      <S.NavIcons>
        <Image
          src="/assets/icons/user.svg"
          alt="aaaaaaa"
          width={24}
          height={24}
          quality={50}
        />{" "}
        <Image
          src="/assets/icons/heart.svg"
          alt="aaaaaaa"
          width={24}
          height={24}
          quality={50}
          style={{ width: 24, height: 24 }}
        />{" "}
        <Image
          src="/assets/icons/shopping-cart.svg"
          alt="aaaaaaa"
          width={24}
          height={24}
          quality={50}
        />
      </S.NavIcons>
    </S.Header>
  );
};

export default Header;
