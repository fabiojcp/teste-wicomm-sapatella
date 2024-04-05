import Image from "next/image";
interface InputProps {
  icon?: {
    src: string;
    alt: string;
    classes?: React.CSSProperties;
    styled?: string;
  };
  placeholder?: string;
  type?: string;
  name?: string;
  wrapperStyled?: string;
}
import * as S from "./styles";

const Input = ({
  icon,
  placeholder,
  type,
  name,
  wrapperStyled,
}: InputProps) => {
  const { Icon } = S;
  return (
    <S.Label htmlFor={name || "name"} styled={wrapperStyled}>
      {icon?.src && icon.alt && (
        <Image
          src={icon.src}
          alt={icon.alt}
          width={24}
          height={24}
          quality={50}
        />
      )}
      <S.Input
        type={type || "text"}
        name={name || "name"}
        placeholder={placeholder || "Buscar"}
        autoComplete="off"
      />
    </S.Label>
  );
};

export default Input;
