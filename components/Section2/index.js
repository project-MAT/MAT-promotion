import * as S from "./style";
import Robot from "../../Assets/PNG/Robot.png";
import Image from "next/image";

const Section2 = () => {
  return (
    <S.MainSection>
      <S.Title>
        안녕하세요 프로젝트 매니저, <S.Yellow>MAT</S.Yellow> 입니다
      </S.Title>
      <Image src={Robot} alt="" />
    </S.MainSection>
  );
};

export default Section2;
