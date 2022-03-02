import * as S from "./style";
import * as I from "../../Assets/SVG";
import Image from "next/image";
import MockUp1 from "../../Assets/PNG/MockUp1.png";
import MockUp2 from "../../Assets/PNG/MockUp2.png";
import Diamond from "../../Assets/PNG/Diamond.png";
import SmallDiamond from "../../Assets/PNG/SmallDiamond.png";
import MockUp3 from "../../Assets/PNG/MockUp3.png";

const Section3_4 = () => {
  return (
    <>
      <S.Section>
        <S.Title>MAT는 어떤 서비스를 제공하나요? </S.Title>
        <div className="Ellipse1">
          <I.Ellipse1 />
        </div>
        <S.Content>
          <Image src={MockUp1} alt="" />
          <div>
            <S.MainTitle>원하는 인재를 찾아가세요</S.MainTitle>
            <S.SubTitle>
              MAT에서는 활발한 구인구직 활동이 가능합니다. <br /> 프로젝트에
              필요한 전공을 구해보세요.
            </S.SubTitle>
          </div>
        </S.Content>
        <S.Content>
          <div className="SmallDiamond">
            <Image src={SmallDiamond} alt="" height={128} />
          </div>
          <div>
            <S.MainTitle>숨은 곳곳에 엄청난 인재가</S.MainTitle>
            <S.SubTitle>
              기발한 아이디어로 프로젝트를 <br /> 진행하고 있는 팀을 찾아
              지원하세요.
              <br />
              올라온 구인공고를 보고 직접 연락할 수 있습니다.
            </S.SubTitle>
          </div>
          <Image src={Diamond} alt="" />
        </S.Content>
      </S.Section>

      <S.Section>
        <S.Title>뜨고있는 프로젝트가 무엇일까요?</S.Title>
        <div className="Ellipse2">
          <I.Ellipse2 />
        </div>
        <S.Content>
          <Image src={MockUp2} alt="" />
          <div>
            <S.MainTitle>많은 관심이 나의 프로젝트에</S.MainTitle>
            <S.SubTitle>
              요즘 GSM에서 가장 인기많은 프로젝트를 알 수 있어요. <br />
              인기있는 프로젝트, 또 방금 올라온 구인공고 모두 확인해보세요.
            </S.SubTitle>
          </div>
        </S.Content>
        <div className="Ellipse3">
          <I.Ellipse3 />
        </div>
        <S.DescTitle>
          MAT에서 원하는 전공자를 찾아가세요 <br />
          GSM 모든 재학생들의 전공을 한눈에 볼 수 있습니다
        </S.DescTitle>
        <div className="Ellipse4">
          <I.Ellipse4 />
        </div>
        <S.Content>
          <div>
            <S.MainTitle>그리고, 나의 프로젝트 제작해보세요</S.MainTitle>
            <S.SubTitle>
              여러분이 주도적으로 필요한 전공들을 모집하세요. <br />
              선배, 후배들이 모두 나의 프로젝트에 관심을 가질 수 있습니다.
            </S.SubTitle>
          </div>
          <div className="MockUp">
            <Image src={MockUp3} alt="" />
          </div>
        </S.Content>
      </S.Section>
    </>
  );
};

export default Section3_4;
