import bgVideo from '../../Assests/Media/video/zmax.mp4';

import {BackgroundVideo, MainContainer} from "./Style/HeaderStyle";

const Header = () => {
    return (
        <MainContainer>
            <video loop autoPlay playsInline muted
                   style={{
                       width: '100%',
                       height: '100%',
                       margin: '0 auto',
                   }}
            >
                <BackgroundVideo src={bgVideo} type="video/mp4"/>
            </video>
        </MainContainer>
    )
}
export default Header