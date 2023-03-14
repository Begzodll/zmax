import {useEffect} from "react";
import {Autoplay, EffectCoverflow, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import AOS from "aos";
import {useWindowDimensions} from "../../helperts/helper";
//
import {
    Block,
    MainContainerOurWork,
    MainText, SubText,
    CardItem, ImageContainer,
    TextContainer, TitleCard,
    SubTitleCard
} from "./Style/HeaderStyle";

import image1 from '../../Assests/Media/image/home_moving_services_1.jpg';
import image2 from '../../Assests/Media/image/home_moving_services_2.jpg';
import image3 from '../../Assests/Media/image/home_moving_services_3.jpg';
import image4 from '../../Assests/Media/image/home_moving_services_4.jpg';

const OurWork = () => {

    const content = [
        {
            id: 1,
            img: image1,
            title: 'We don’t just move furniture, we move lives',
            subText: 'Moving to a new home is a major life event – and that includes local moves. Local movers\n' +
                '                    understand that and want to make sure you feel at home before you even unpack a box.'
        },
        {
            id: 2,
            img: image2,
            title: 'We don’t just move furniture, we move lives',
            subText: 'Moving to a new home is a major life event – and that includes local moves. Local movers\n' +
                '                    understand that and want to make sure you feel at home before you even unpack a box.'
        },
        {
            id: 3,
            img: image3,
            title: 'We don’t just move furniture, we move lives',
            subText: 'Moving to a new home is a major life event – and that includes local moves. Local movers\n' +
                '                    understand that and want to make sure you feel at home before you even unpack a box.'
        },
        {
            id: 4,
            img: image4,
            title: 'We don’t just move furniture, we move lives',
            subText: 'Moving to a new home is a major life event – and that includes local moves. Local movers\n' +
                '                    understand that and want to make sure you feel at home before you even unpack a box.'
        },
    ]

    const [width] = useWindowDimensions();

    const getCountElement = () => {
        if (width > 750) return 2;
        if (width < 750) return 1;
        return 1
    }


    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <MainContainerOurWork>
            <Block>
                <MainText data-aos={'fade-up'} data-aos-duration={'1000'}>We don’t just move furniture, we move lives</MainText>
                <SubText data-aos={'fade-up'} data-aos-duration={'1500'}>Moving to a new home is a major life event – and that includes local moves. Local movers
                    understand that and want to make sure you feel at home before you even unpack a box.</SubText>

                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={getCountElement()}
                    spaceBetween={-80}
                    loop={true}
                    coverflowEffect={{
                        rotate: 40,
                        stretch: 0,
                        depth: 0,
                        modifier: 2,
                        slideShadows: false,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Autoplay, Pagination]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                >
                    {
                        content.map(item => (
                            <SwiperSlide key={item.id}>
                                <CardItem>
                                    <ImageContainer src={item.img}/>
                                    <TextContainer>
                                        <TitleCard>{item.title}</TitleCard>
                                        <SubTitleCard>{item.subText}</SubTitleCard>
                                    </TextContainer>
                                </CardItem>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Block>
        </MainContainerOurWork>
    )
}
export default OurWork