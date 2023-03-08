import TextTransition, {presets} from "react-text-transition";
import {useEffect, useState} from "react";
import {
    ContainerChangingText,
    ChangingTextContainer,
    SubTextChangingText,
    IndexText,BtnGroupChangingPage
} from "./Style/HeaderStyle";

const TextChanging = () => {


    const TEXTS = [
        "the best we can",
        "all the work",
        "the heavy lifting",
        "the fastest"
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
                setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    // const ind = TEXTS.length

    return (
        <ContainerChangingText>
            <ChangingTextContainer>
                <IndexText>
                    <span>Let us do</span> {''} <TextTransition springConfig={presets.wobbly}>
                    {TEXTS[index % TEXTS.length]}
                </TextTransition>
                </IndexText>
            </ChangingTextContainer>
            <SubTextChangingText>
                After seeing how quality movers and moving services can have such a positive effect on our
                customers' lives, we became committed to delivering the highest level of service every time.
            </SubTextChangingText>
            <BtnGroupChangingPage>
            </BtnGroupChangingPage>
        </ContainerChangingText>
    )
}
export default TextChanging