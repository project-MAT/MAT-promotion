import * as S from "./style";
import * as I from "../../Assets/SVG";
import Link from "next/link";

const Section1 = () => {
  return (
    <S.MainSection>
      <S.Logo>
        <I.Logo />
      </S.Logo>
      <S.Title>
        프로젝트에 필요한 멤버를 쉽고 빠르게, <S.Yellow>Make A Team</S.Yellow>
      </S.Title>
      <S.More>더 알아보기</S.More>
    </S.MainSection>
  );
};

export default Section1;
