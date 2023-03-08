import {useEffect} from "react";
import {
    OurWorkContainer,
    ServiceBlock,
    ServiceBox,
    ContainerBoxTitle,
    ServiceBody,
    ServiceTitle
} from "./Style/HeaderStyle";
import {Button} from "@material-tailwind/react";
import bgImage from '../../Assests/Media/image/moving-video2.jpg';
import AOS from "aos";
const OurService = () => {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <OurWorkContainer>
            <ServiceBlock data-aos={'fade-up'} data-aos-delay={'300'}>
                <ServiceBox>
                    <img src={bgImage} alt="image" data-aos={'fade-right'} data-aos-delay={'500'} data-aos-duration={'900'}/>
                </ServiceBox>
                <ContainerBoxTitle data-aos={'fade-left'} data-aos-delay={'500'} data-aos-duration={'900'}>
                    <ServiceTitle>
                        Every move is important, <br/>
                        no matter how far you go
                    </ServiceTitle>
                    <ServiceBody>
                        Moving can be stressful, overwhelming and may seem like a huge project. It doesn’t have to
                        be!
                        This is why we’re here to help . Our local moving company offers a full range of local
                        moving
                        services.
                    </ServiceBody>
                    <Button>Our Services</Button>
                </ContainerBoxTitle>
            </ServiceBlock>
        </OurWorkContainer>
    )
}
export default OurService