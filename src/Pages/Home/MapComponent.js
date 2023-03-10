import {Fragment, useState} from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {
    FullscreenControl,
    Map,
    Placemark,
    YMaps,
    ZoomControl
} from "react-yandex-maps";
import {
    MapStyle,
    BoxLocation,
    ContainerMapComponent,
    TitleBox,
    LocationBlock,
    ItemLocation,
} from "./Style/HeaderStyle";

import email from '../../Assests/Media/png/emailLocation.png';
import phone from '../../Assests/Media/png/phone.png';
import location from '../../Assests/Media/png/location.png';

const MapComponent = () => {
    const center = {
        center: [38.844252574027394, -77.2650803634623],
        zoom: 13
    };
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    const locationData = [
        {
            id: 1,
            icon: email,
            data: 'zmaxmovers@gmail.com',
        },
        {
            id: 2,
            icon: phone,
            data: '703-901-7561',
            tel:'+17039017561'
        },
        {
            id: 3,
            // icon: location,
            data: ' 3904 Persimmon Dr apt 101, Fairfax, VA 22031'
        },
    ]
    return (
        <ContainerMapComponent>
            <MapStyle>
                <YMaps>
                    <Map
                        state={center}
                        modules={["control.SearchControl"]}
                        width="100%"
                        height="500px"
                    >
                        <ZoomControl
                            options={{float: "none", position: {top: 100, right: 10}}}
                        />
                        <Placemark options={{
                            iconImageSize: [32, 32],
                        }} geometry={[38.844252574027394, -77.2650803634623]}/>
                        <FullscreenControl/>
                    </Map>
                </YMaps>
                <BoxLocation>
                    <TitleBox>Global Location</TitleBox>
                    <Fragment>
                        <Accordion open={open === 1}>
                            <AccordionHeader onClick={() => handleOpen(1)}>
                                DMV
                            </AccordionHeader>
                            <AccordionBody>
                                {
                                    locationData.map(item => <LocationBlock key={item.id}>
                                        <ItemLocation svg={item.icon}>{item.data}</ItemLocation>
                                    </LocationBlock>)
                                }
                            </AccordionBody>
                        </Accordion>
                    </Fragment>
                </BoxLocation>
            </MapStyle>
        </ContainerMapComponent>
    )
}
export default MapComponent