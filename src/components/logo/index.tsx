import { styled } from "goober";
import Image from "next/image";
import Link from "next/link";

const LogoWrapper = styled("div")`
  cursor: pointer;

  * {
    cursor: pointer;
  }
`;

const Logo = () => {
  return (
    <LogoWrapper>
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
    </LogoWrapper>
  );
};

export default Logo;
