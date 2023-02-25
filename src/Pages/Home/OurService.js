import {useEffect, useState} from "react";
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
const OurService = () => {

    return (
        <OurWorkContainer>

            <ServiceBlock>
                <ServiceBox>
                    <img src={bgImage} alt="image"/>
                </ServiceBox>
                <ContainerBoxTitle>
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