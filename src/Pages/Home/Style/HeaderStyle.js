import styled, {keyframes} from 'styled-components';


// Header
export const MainContainer = styled.div`
  width: 100%;
  height: 90vh;
  @media (max-width: 1190px) {
    height: auto;
  }
`;
export const BackgroundVideo = styled.source`
  margin: 0 auto;

`;

// Our work
export const MainContainerOurWork = styled.div`
  width: 100%;
  height: auto;
  background-attachment: fixed;
  padding: 2rem 0;
  margin: 5rem auto;
  border-radius: 50px;
  @media (max-width: 992px) {
    width: 100%;
    box-shadow: none;
    border-radius: 50px;
  }
`
export const Block = styled.div`
`
export const CardItem = styled.div`
  width: 70%;
  border-radius: 20px;
  margin: 3rem auto;
  border: 1px solid #c3c3c3;
`
export const ImageContainer = styled.div`
  background-image: url(${({src}) => src});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 450px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  @media (max-width: 450px) {
    height: 230px;
  }
`
export const TextContainer = styled.div`
  padding: 1rem 1.5rem;
`
export const TitleCard = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 1rem 0;
  @media (max-width: 450px) {
    font-size: 18px;
  }
`
export const SubTitleCard = styled.div`
  @media (max-width: 450px) {
    font-size: 14px;
  }
`
export const MainText = styled.div`
  text-align: center;
  color: #1F276E;
  font-size: 36px;
  font-weight: bold;
  @media (max-width: 450px) {
    font-size: 26px;
  }
`
export const Box = styled.div`
  width: 188px;
  height: 188px;
  border-radius: 20px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`
export const SubText = styled.div`
  text-align: center;
  width: 60%;
  margin: 1rem auto;
  color: #414141;
  font-size: 16px;
  @media (max-width: 450px) {
    width: 100%;
    font-size: 15px;
  }
`
export const SliderBlock = styled.div`
  display: flex;
  justify-content: space-between;
`


// Our Service
export const OurWorkContainer = styled.div`
  width: 90%;
  margin: 3rem auto;
  height: auto;
  padding: 4rem;
  border-radius: 40px;
  background: #F1F6FF;
  @media (max-width: 1037px) {
    padding: 3rem 8rem;
  }
  @media (max-width: 774px) {
    padding: 1rem ;
  }
`
export const ServiceBlock = styled.div`
  display: flex;
  @media (max-width: 1037px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
export const ServiceBox = styled.div`
  width: 50%;

  img {
    border-radius: 20px;
    z-index: 55;
  }

  @media (max-width: 1037px) {
    width: 100%;
    img {
      width: 100%;
      height: 400px;
    }
  }
  @media (max-width: 450px) {
    img {
      width: 100%;
      height: 250px;
    }
  }
`
export const ServiceTitle = styled.div`
  color: #1F276E;
  font-weight: bold;
  font-size: 32px;
  @media (max-width: 1223px) {
    font-size: 25px;
  }
  @media (max-width: 421px) {
    font-size: 20px;
  }
  @media (max-width: 355px) {
    font-size: 18px;
  }
`
export const ServiceBody = styled.div`
  color: #455881;
  margin: 2rem 0 3rem 0;
  @media (max-width: 1223px) {
    margin: 1rem 0 2rem 0;
  }
  @media (max-width: 421px) {
    font-size: 14px;
  }
`
export const ContainerBoxTitle = styled.span`
  width: 50%;
  padding: 3rem 0;

  @media (max-width: 1290px) {
    padding: 3rem;
  }
  @media (max-width: 1037px) {
    width: 100%;
  }
  @media (max-width: 495px) {
    padding: 1rem;
  }
`

// Local Moving
export const LocalMovingContainer = styled.div`
  width: 80%;
  height: auto;
  margin: 10rem auto;
  @media (max-width: 1200px) {
    width: 90%;
  }
`
export const LocalMovingBlock = styled.div`
  display: flex;
  @media (max-width: 885px) {
    flex-direction: column;
  }
`
export const LocalMovingBox = styled.div`
  width: 50%;
  @media (max-width: 885px) {
    width: 100%;
  }
`
export const LocalMovingTitle = styled.p`
  font-size: 32px;
  width: 535px;
  font-weight: bold;
  color: #1F276E;
  @media (max-width: 577px) {
    font-size: 26px;
    width: 100%;
  }
`
export const OptionBlock = styled.div`
`
export const LocalMovingOptions = styled.div`
  display: flex;
  margin: 2rem auto;
  @media (max-width: 1287px) {
    flex-direction: column;
  }
`
export const LocalMovingOptBox = styled.div`
  margin: 0 1rem 0 0;
`
export const ImageBox = styled.img`
  width: 30px;
  height: 30px;
  margin: .4rem 0 0 0;
`
export const LocalMovingOptBoxTitle = styled.p`
  color: #1F276E;
  font-weight: bold;
  margin: .5rem 0 1rem .3rem;
  font-size: 19px;
`
export const LocalMovingOptBoxBody = styled.p`
  color: #414141;
  font-weight: 400;
  width: 450px;
  margin: 0 0 0 8px;
  @media (max-width: 577px) {
    width: 100%;
  }
`
export const LocalMovingBoxSize = styled.div`
  width: 100%;
  position: relative;
  background: red;
`
const breatheAnimation = keyframes`
  0% {
    z-index: 1;
    top: -1rem;
  }
  50% {
    z-index: 2;
    top: 20px;
  }
  100% {
    z-index: 1;
    top: -1rem;
  }
`
const breatheAnimationTwo = keyframes`
  0% {
    top: 0;
  }
  50% {
    top: -30px;
  }
  100% {
    top: 0;
  }
`
const dotsAnimation = keyframes`
  0% {
    right: -4rem;
  }
  50% {
    transform: scale(30px);
    right: -3.5rem;
  }
  100% {
    right: -4rem;
  }
`
const mobileBreatheAnimation = keyframes`
  0% {
    top: 0;
  }
  50% {
    top: 40px;
  }
  100% {
    top: 0;
  }
`
const mobileBreatheAnimationTwo = keyframes`
  0% {
    top: 14rem;
  }
  50% {
    top: 13rem;
  }
  100% {
    top: 14rem;
  }
`
const mobileDotsAnimation = keyframes`
  0% {
    top: 10rem;
    left: 18%;
    height: 150px;
  }
  50% {
    top: 12rem;
    left: 26%;
    height: 100px;
  }
  100% {
    top: 10rem;
    left: 18%;
    height: 150px;
  }
`
export const SwiftImageOne = styled.img`
  position: absolute;
  z-index: 2;
  border-radius: 10px;
  top: 0;
  animation-name: ${breatheAnimationTwo};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  @media (max-width: 1192px) {
    animation: none;
  }
  @media (max-width: 1057px) {
    width: 300px;
    height: 300px;
    right: 60px;
  }
  @media (max-width: 992px) {
    right: 0;
    bottom: 0;
  }
  @media (max-width: 885px) {
    left: 0;
    width: 50%;
    height: 400px
  }
  @media (max-width: 577px) {
    left: 0;
    width: 50%;
    height: 250px;
    animation-name: ${mobileBreatheAnimation};
    animation-iteration-count: infinite;
    animation-duration: 4s;
    animation-direction: alternate;
  }
`
export const SwiftImageTwo = styled.img`
  position: absolute;
  top: -1rem;
  right: 0;
  border-radius: 10px;
  transition: 1s ease;
  animation-name: ${breatheAnimation};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  @media (max-width: 1192px) {
    animation: none;
  }
  @media (max-width: 1057px) {
    width: 300px;
    height: 300px;
    top: 18rem;
    z-index: 1;
  }
  @media (max-width: 992px) {
    right: 0;
    bottom: 0;
  }
  @media (max-width: 885px) {
    right: 0;
    width: 48%;
    height: 300px
  }
  @media (max-width: 577px) {
    right: 0;
    top: 14rem;
    width: 50%;
    height: 200px;
    animation-name: ${mobileBreatheAnimationTwo};
    animation-iteration-count: infinite;
    animation-duration: 4s;
    animation-direction: alternate;
  }
`
export const SwiftDots = styled.img`
  position: absolute;
  top: 18rem;
  right: -4rem;
  animation: ${dotsAnimation} 1.5s ease-in-out infinite;
  @media (max-width: 1215px) {
    animation: none;
    right: 0;
  }
  @media (max-width: 1057px) {
    left: -1.5rem;
    bottom: 9rem;
    transform: rotate(90deg);
  }
  @media (max-width: 992px) {
    display: none;
  }
  @media (max-width: 577px) {
    display: block;
    top: 10rem;
    left: 18%;
    height: 150px;
    animation-name: ${mobileDotsAnimation};
    animation-iteration-count: infinite;
    animation-duration: 4s;
    animation-direction: alternate;
  }
`

// Process
export const MainContainerProcess = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 885px) {
    margin: 43rem auto 0 auto;
  }
  @media (max-width: 500px) {
    margin: 34rem auto 0 auto;
  }
`
export const BlockProcess = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  justify-content: space-between;
  margin: 0 auto;
  @media (max-width: 992px) {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(2, auto);
    grid-gap: 30px;
  }
  @media (max-width: 625px) {
    grid-template-rows: repeat(4, auto);
    grid-template-columns: repeat(1, auto);
    grid-gap: 40px;
  }
`
export const NumberBoxProcess = styled.div`
  text-align: center;
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #377EF9;
  color: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  font-weight: 500;
  z-index: 4;
`
const circleAnimationAfter = keyframes`
  from {
    width: 70px;
    height: 70px;
  }
  to {
    width: 85px;
    height: 85px;
  }
`
const circleAnimationBefore = keyframes`
  from {
    width: 70px;
    height: 70px;
  }
  to {
    width: 100px;
    height: 100px;
  }
`
export const BoxProcess = styled.div`
  width: 100%;

  &:hover ${NumberBoxProcess} {
    &:after {
      position: absolute;
      content: "";
      width: 85px;
      height: 85px;
      background: #377EF9;
      border-radius: 50%;
      opacity: .3;
      z-index: -1;
      animation-name: ${circleAnimationAfter};
      animation-iteration-count: initial;
      animation-timing-function: ease;
      animation-direction: alternate;
      animation-duration: .3s;
    }

    &:before {
      position: absolute;
      content: "";
      width: 100px;
      height: 100px;
      background: #377EF9;
      border-radius: 50%;
      opacity: .2;
      z-index: -1;
      animation-name: ${circleAnimationBefore};
      animation-iteration-count: initial;
      animation-timing-function: ease;
      animation-direction: alternate;
      animation-duration: .4s;
    }
  }
`
export const TitleProcess = styled.p`
  text-align: center;
  margin: 1rem 0;
  color: #1E266D;
  font-size: 26px;
  font-weight: bold;
`
export const TextBodyProcess = styled.p`
  text-align: center;
  @media (max-width: 992px) {
    width: 80%;
    margin: 0 auto;
  }
`
