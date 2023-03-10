import {useRef} from "react";
import {
    BtnGroup,
    CommentsContainer,
    DotsComments,
    FlexContainer,
    JobTitle,
    TitleComments,
    CommentsCard,
    CardProfile,
    ImageProfile,
    NameProfile,
    Responsibility,
    TitleCommentsCard,
    DescCommentsCard,
} from "./Style/HeaderStyle";
import dots from '../../Assests/Media/png/dots.png';
import {Button} from "@material-tailwind/react";
import {useWindowDimensions} from "../../helperts/helper";
import profile from '../../Assests/Media/image/profile.webp'
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper";

const Comments = () => {

    const [width] = useWindowDimensions();

    const swipeData = [
        {
            id: 1,
            name: 'Polonchi',
            responsiblity: 'Pistonchi',
            title: 'Exellent Team!!!',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum excepturi obcaecati, quam qui ratione vitae.'
        },
        {
            id: 2,
            name: 'Polonchi',
            responsiblity: 'Pistonchi',
            title: 'Exellent Team!!!',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum excepturi obcaecati, quam qui ratione vitae.'
        },
        {
            id: 3,
            name: 'Polonchi',
            responsiblity: 'Pistonchi',
            title: 'Exellent Team!!!',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum excepturi obcaecati, quam qui ratione vitae.'
        },
        {
            id: 4,
            name: 'Polonchi',
            responsiblity: 'Pistonchi',
            title: 'Exellent Team!!!',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum excepturi obcaecati, quam qui ratione vitae.'
        },
    ]

    const navigatePrev = useRef(null);
    const navigateNext = useRef(null);

    const getCountElement = () => {
        if (width > 1432) return 3;
        if (width > 982) return 2;
        return 1}

    return (
        <CommentsContainer>
            <FlexContainer>
                <TitleComments>
                    See what our customers are saying about us
                </TitleComments>
                <BtnGroup>
                    <Button
                        ref={navigatePrev}
                        variant="outlined"
                        style={
                            {
                                textAlign: 'center',
                                margin: width < 500 ? '-2.5rem .5rem 0 0' : "0",
                                width: width < 506 ? '10px' : "",
                                height: width < 506 ? '35px' : "40px",
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }
                        }
                    >{'<'}</Button>
                    <Button
                        ref={navigateNext}
                        variant="outlined"
                        style={{
                            width: width < 506 ? '10px' : "",
                            height: width < 506 ? '35px' : "40px",
                            margin: width < 500 ? '-2.5rem 0 0 0' : "0 .5rem",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>{'>'}</Button>
                </BtnGroup>
            </FlexContainer>
            <DotsComments src={dots} alt={'dots'}/>
                <Swiper
                    loop={true}
                    modules={[Navigation, Autoplay]}
                    slidesPerView={getCountElement()}
                    spaceBetween={70}
                    navigation={{
                        prevEl: navigatePrev.current,
                        nextEl: navigateNext.current
                    }}
                    onBeforeInit={(swiper => {
                        swiper.params.navigation.prevEl = navigatePrev.current
                        swiper.params.navigation.nextEl = navigateNext.current
                    })}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: true
                    }}
                >
                    {
                        swipeData.map(item => (
                            <SwiperSlide key={item.id}>
                                <CommentsCard>
                                    <CardProfile className={'flex'}>
                                        <ImageProfile className={'rounded-full'} src={profile}/>
                                        <JobTitle classNamme={'flex flex-column'}>
                                            <NameProfile>{item.name}</NameProfile>
                                            <Responsibility>{item.responsiblity}</Responsibility>
                                        </JobTitle>
                                    </CardProfile>
                                    <TitleCommentsCard>{item.title}</TitleCommentsCard>
                                    <DescCommentsCard>{item.body}</DescCommentsCard>
                                </CommentsCard>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
        </CommentsContainer>
    )
}
export default Comments