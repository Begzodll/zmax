import {
    LocalMovingBlock,
    LocalMovingBox,
    LocalMovingContainer,
    LocalMovingOptions,
    LocalMovingTitle,
    LocalMovingOptBoxTitle,
    LocalMovingOptBoxBody,
    LocalMovingOptBox, OptionBlock,
    ImageBox, LocalMovingBoxSize,
    SwiftImageTwo, SwiftImageOne,
    SwiftDots
} from "./Style/HeaderStyle";


import png1 from '../../Assests/Media/png/time.png';
import png2 from '../../Assests/Media/png/message.png';
import png3 from '../../Assests/Media/png/restore.png';

import image1 from '../../Assests/Media/image/localMoving-img-1.jpg';
import image2 from '../../Assests/Media/image/localMoving-img-2.jpg';
import dots from '../../Assests/Media/png/dots.png';
import {useEffect} from "react";
import AOS from "aos";
const LocalMoving = () => {

    const optionsBlock = [
        {
            id: 1,
            svg: png2,
            title: 'Clear communication from start to finish',
            body: "We have the finest people in the moving and storage\n" +
                "business. Our New York movers show up on time."
        },
        {
            id: 2,
            svg: png1,
            title: 'Your choice of flat-rate or hourly pricing',
            body: "We have the finest people in the moving and storage\n" +
                "business. Our New York movers show up on time."
        },
        {
            id: 3,
            svg: png3,
            title: 'Simple, easy to follow process',
            body: "We have the finest people in the moving and storage\n" +
                "business. Our New York movers show up on time."
        },
    ];
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <LocalMovingContainer>
            <LocalMovingBlock>
                <LocalMovingBox>
                    <LocalMovingTitle data-aos={'fade-right'} data-aos-duration={'700'}>
                        Let our local moving company give you a lift to your home
                    </LocalMovingTitle>
                    <OptionBlock>
                        {
                            optionsBlock.map(item => <div key={item.id}>
                                <LocalMovingOptions>
                                    <LocalMovingOptBox>
                                        <ImageBox src={item.svg}/>
                                    </LocalMovingOptBox>
                                    <LocalMovingOptBox>
                                        <LocalMovingOptBoxTitle>{item.title}</LocalMovingOptBoxTitle>
                                        <LocalMovingOptBoxBody>{item.body}</LocalMovingOptBoxBody>
                                    </LocalMovingOptBox>
                                </LocalMovingOptions>
                            </div>)
                        }
                    </OptionBlock>
                </LocalMovingBox>
                <LocalMovingBox>
                    <LocalMovingBoxSize>
                        <SwiftImageOne src={image1}/>
                        <SwiftImageTwo src={image2}/>
                        <SwiftDots src={dots}/>
                    </LocalMovingBoxSize>
                </LocalMovingBox>
            </LocalMovingBlock>
        </LocalMovingContainer>
    )
}
export default LocalMoving