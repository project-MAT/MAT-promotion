import * as S from './style'
import MainIMG from '../../Assets/Section2_5.png'

const Section2_5 = () => {
  return (
    <>
      <S.MainSection>
        <S.SubTitle>
          MAT 는 뭐 이런저런 서비스를 제공합니다. <br />
          MAT 는 뭐 이런저런 서비스를 제공합니다. <br />
        </S.SubTitle>
        <S.IMG>
          <img src={MainIMG} alt="" />
        </S.IMG>
      </S.MainSection>
    </>
  )
}

export default Section2_5
