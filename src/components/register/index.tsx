import Link from "next/link";
import * as S from "./styles";

const RegisterSection = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>
          Cadastre-se e ganhe <b>R$20 OFF</b> na sua primeira compra!
        </S.Title>

        <S.Form>
          <S.Input type="text" placeholder="Name" />
          <S.Input type="email" placeholder="E-mail" />

          <Link href="/">
            <S.Button type="submit">Cadastrar</S.Button>
          </Link>
        </S.Form>
      </S.Content>
    </S.Wrapper>
  );
};

export default RegisterSection;
