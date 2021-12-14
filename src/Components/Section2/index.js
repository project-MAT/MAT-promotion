import * as S from './style'
import MainIMG from '../../Assets/Section2.png'

const Section2 = () => {
  return (
    <>
      <S.MainSection>
        <S.IMG>
          <img src={MainIMG} alt="" />
        </S.IMG>
        <S.SubTitle>
          MAT를 통해 자유롭게 프로젝트 멤버를 구성하세요. <br />
          또 자신이 원하는 프로젝트를 찾아 지원하고, <br />
          각자의 전공을 구하는 프로젝트를 찾아보세요. <br />
        </S.SubTitle>
      </S.MainSection>
    </>
  )
}

export default Section2
