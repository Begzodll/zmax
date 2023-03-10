import {
    MainContainerDirections,
    BlockDirections,
    BoxDirections,
    IntoText, TickGroup, TickItems,
    TitleDirection,
    SubTitleDirection, DescrDirection
} from "./Style/HeaderStyle";


import tick from '../../Assests/Media/png/tick.png';

const Directions = () => {
    const tickData = [
        {
            id: 1,
            title: 'Individual FREE QUOTE'
        },
        {
            id: 2,
            title: 'Referral program benefits'
        },
        {
            id: 3,
            title: 'Hight quality service'
        },
        {
            id: 4,
            title: '24/7 customer service'
        },
        {
            id: 5,
            title: 'Reliable long term relationship'
        },
        {
            id: 6,
            title: 'We are licensed, insured and bonded'
        },
    ]
    return (
        <MainContainerDirections>
            <BlockDirections>
                <BoxDirections>
                    <IntoText>
                        Directions, That Matter!
                    </IntoText>
                    <TitleDirection>
                        Best Mover Companies <br/>
                        Near Me <br/>
                        Saves Your Time!
                    </TitleDirection>
                    <SubTitleDirection>
                        We make moves in Washington DC, Arlington, Alexandria, Falls Church, Sprienfield, Annandale,
                        Fairfax, McLean, Chantilly, Tyson Corner, Great Falls, Ashburn, Leesburg,Reston, Herndon,
                        Sterling Centreville, Mannasas, Burke and other.
                    </SubTitleDirection>
                </BoxDirections>
                <BoxDirections>
                    <DescrDirection>
                        Zmax Movers is a company which was established to the best in Washington DC metro area. Zmax
                        Movers team picked all good things in a moving industry and left all bad. <br/>
                        Moving doesn`t have to be a stressful experience, if you have the right people working for
                        you. <br/>
                        No matter what the job, we at Zmax Movers hold ourselves to the highest standards of excellence
                        and strive to be the best moving company in the industry. Established in 2017.
                    </DescrDirection>
                    <TickGroup>
                        {
                            tickData.map(item =>
                                <div key={item.id}>
                                    <TickItems tick={tick}>{item.title}</TickItems>
                                </div>
                            )
                        }
                    </TickGroup>
                </BoxDirections>

            </BlockDirections>
        </MainContainerDirections>
    )
}
export default Directions