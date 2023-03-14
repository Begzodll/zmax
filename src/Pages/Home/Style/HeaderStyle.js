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
  border: 1px solid #F1F6FF;
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
  overflow: hidden;
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

//Comments
export const CommentsContainer = styled.div`
  width: 90%;
  margin: 5rem auto;
  height: auto;
  border-radius: 50px;
  background: #F1F6FF;
  padding: 4rem;
  position: relative;
  @media (max-width: 572px) {
    padding: 2rem;
  }
`
export const TitleComments = styled.div`
  font-size: 25px;
  font-weight: 550;
  color: #1F276E;
  margin: 0 0 4rem 0;
  @media (max-width: 900px) {
    font-size: 20px;
  }
`
export const DotsComments = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`
export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`
export const BtnGroup = styled.div`
  display: flex;
`
export const CommentsCard = styled.div`
  overflow: hidden;
  width: 400px;
  height: auto;
  background: #fff;
  padding: 3rem;
  margin: 1rem 0;
  border-radius: 20px;
  @media (max-width: 500px) {
    padding: 1rem;
    width: 100%;
  }
`
export const CardProfile = styled.div`

`
export const ImageProfile = styled.img`
  margin: 0 1rem 0 0;
  width: 50px;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`
export const JobTitle = styled.div`

`
export const NameProfile = styled.div`
  color: #377EF9;
  font-weight: 550;
  font-size: 20px;
`
export const Responsibility = styled.div`
  color: #B4B4B4;
  font-size: 14px;
  line-height: 10px;
`
export const TitleCommentsCard = styled.div`
  margin: 1rem 0;
  color: #1E266D;
  font-size: 20px;

`
export const DescCommentsCard = styled.div`
`

//Changing Text
export const ContainerChangingText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 4rem;
`
export const IndexText = styled.div`
  display: flex;
  font-size: 38px;
  color: #1E266D;
  font-weight: bold;
  text-align: center;

  span {
    margin: 0 5px;
  }

  @media (max-width: 747px) {
    font-size: 30px;
    text-align: center;
  }
  @media (max-width: 476px) {
    font-size: 23px;
    text-align: center;
    span {
      margin: 0 3px;
    }
  }
  @media (max-width: 428px) {
    font-size: 19px;
  }

`
export const ChangingTextContainer = styled.div`

`
export const SubTextChangingText = styled.div`
  color: #B4B4B4;
  width: 50%;
  margin: 1rem 0;
  font-weight: 500;
  @media (max-width: 1240px) {
    text-align: center;
  }
  @media (max-width: 747px) {
    width: 100%;
  }
  @media (max-width: 476px) {
    font-size: 14px ;
    text-align: center;
    span {
      margin: 0 3px;
    }
  }

`
export const BtnGroupChangingPage = styled.div`

`

// FAQ
export const FaqMainContainer = styled.div`
  width: 80%;
  margin: 4rem auto 4rem auto;
  background: #F1F6FF;
  padding: 3rem;
  border-radius: 20px;
  @media (max-width: 1130px) {
    width: 95%;
  }
  @media (max-width: 420px) {
    padding: 2rem 10px;
  }
`
export const TitleFaq = styled.div`
  font-size: 25px;
  text-align: center;
  color: #1E266D;
  font-weight: bold;
  width: 50%;
  @media (max-width: 1130px) {
    width: 80%;
  }
  @media (max-width: 561px) {
    width: 100%;
    font-size: 20px;
  }
`
export const SubTitleFaq = styled.div`
  text-align: center;
  color: #B4B4B4;
  width: 50%;
  @media (max-width: 1130px) {
    width: 80%;
  }
  @media (max-width: 561px) {
    width: 100%;
    font-size: 15px;
  }
`
export const TitleContainerFaq = styled.div`
  width: 100%;
  height: auto;
  padding: 0 0 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const FaqBlockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`
export const BoxMailing = styled.div`
  width: 50%;
  height: auto;
  @media (max-width: 992px) {
    width: 100%;
  }
`
export const FormMailing = styled.div`
  width: 80%;
  border-radius: 20px;
  margin: 0 auto;
  padding: 1rem;
  @media (max-width: 992px) {
    margin: 3rem auto 0 auto;
  }
  @media (max-width: 420px) {
    padding: 0;
  }
`
export const FormTitle = styled.div`
  color: #1E266D;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  @media (max-width: 420px) {
    width: 100%;
    font-size: 18px;
  }
`
export const FormSubTitle = styled.div`
  color: #B4B4B4;
  width: 70%;
  text-align: center;
  margin: 0 auto;
  @media (max-width: 1130px) {
    width: 85%;
  }
  @media (max-width: 420px) {
    width: 100%;
    font-size: 15px;
  }
`
export const AccordionText = styled.span`
  @media (max-width: 430px) {
    font-size: 16px;
  }
`

// Directions
export const MainContainerDirections = styled.div`
  width: 100%;
  margin: 5rem auto;
  background: #F1F6FF;
  padding: 5rem 0;
`
export const BlockDirections = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  @media (max-width: 1163px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    width: 60%;
  }
  @media (max-width: 670px) {
    text-align: start;
    width: 80%;
  }
  @media (max-width: 465px) {
    text-align: start;
    width: 90%;
  }
`
export const BoxDirections = styled.div`
  width: 50%;
  height: auto;
  @media (max-width: 1163px) {
    width: 100%;
  }
`
export const IntoText = styled.div`
  font-size: 15px;
  color: #414141;
  @media (max-width: 465px) {
    font-size: 13px;
  }
`
export const TitleDirection = styled.div`
  color: #414141;
  font-size: 32px;
  font-weight: bold;
  margin: 1rem 0;
  @media (max-width: 465px) {
    font-size: 23px;
    margin: .5rem 0 ;
  }
`
export const SubTitleDirection = styled.div`
  color: #414141;
  width: 90%;
  @media (max-width: 1163px) {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 465px) {
    font-size: 15px;
  }
`
export const DescrDirection = styled.div`
  color: #414141;
  line-height: 28px;
  font-weight: 500;
  width: 90%;
`
export const TickGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 10px;
  margin: 40px 0;
  text-align: start;
  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
  }
`
export const TickItems = styled.div`
  position: relative;
  margin: 0 0 0 30px;
  font-weight: bold;
  color: #414141;
  font-size: 15px;

  :before {
    content: "";
    position: absolute;
    left: -30px;
    top: 0;
    background-image: url(${({tick}) => tick});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    width: 25px;
    height: 25px;
  }
`
export const ContainerMapComponent = styled.div`
  width: 100%;
  height: auto;
`
export const MapStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`
export const BoxLocation = styled.div`
  width: 300px;
  height: auto;
  background: #F1F6FF;
  border-radius: 20px;
  position: absolute;
  right: 90px;
  padding: 2rem;
`
export const TitleBox = styled.div`
  width: 90%;
  background: #E11D07;
  border-radius: 10px;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 15px;
  color:#fff;
  padding: 10px 2rem;
`
export const LocationBlock = styled.div`
  
`
export const ItemLocation = styled.div`
  position: relative;
  text-align: center;
  font-size: 14px;
  &:before{
    content:"";
    position: absolute;
    left: 0;
    background-image: url(${({svg})=>svg});
    background-size: cover;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
  }
`
