import styled from "styled-components";

export const Section3 = styled.div`
  position: relative;
  margin-top: 400px;
`;

export const Section = styled.div`
  margin-top: 400px;
  position: relative;
  .SmallDiamond {
    height: 124px;
    margin-left: 100px;
  }

  .Ellipse1 {
    position: absolute;
    z-index: -1;
    top: -70px;
    left: 800px;
  }
  .Ellipse2 {
    position: absolute;
    top: -40px;
    left: 410px;
    z-index: -1;
  }

  .Ellipse3 {
    position: absolute;
    top: 700px;
    left: 1000px;
    z-index: -1;
  }

  .Ellipse4 {
    position: absolute;
    top: 1000px;
    left: 50px;
    z-index: -1;
  }

  .MockUp {
    width: 1000px;
  }
`;

export const Title = styled.div`
  font-size: 60px;
  margin: 50px 0 250px 150px;
`;

export const Content = styled.div`
  display: flex;
  margin-left: 5vw;
  align-items: center;
`;

export const MainTitle = styled.div`
  font-size: 50px;
  margin-bottom: 60px;
`;

export const SubTitle = styled.div`
  color: #5f5f5f;
  font-size: 20px;
  line-height: 45px;
`;

export const DescTitle = styled.div`
  text-align: center;
  font-size: 30px;
  line-height: 59px;
  margin-top: 400px;
`;
