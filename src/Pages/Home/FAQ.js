import {
    FaqMainContainer,
    FaqBlockContainer,
    TitleFaq,
    TitleContainerFaq,
    SubTitleFaq,
    BoxMailing,
    FormTitle,
    FormSubTitle,
    FormMailing,AccordionText
} from "./Style/HeaderStyle";
import {useState, Fragment} from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Input, Textarea,Button
} from "@material-tailwind/react";

const FAQ = () => {

    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const customAnimation = {
        mount: {scale: 1},
        unmount: {scale: 0.9},
    };

    return (
        <div>
            <FaqMainContainer>
                <TitleContainerFaq>
                    <TitleFaq>
                        We will assist you until you are settled into your
                        new residence at your final destination
                    </TitleFaq>
                    <SubTitleFaq>
                        We will help reduce your worry by providing you an all-inclusive service that also
                        incorporates the storage of your goods in our solid warehouse facilities.
                    </SubTitleFaq>
                </TitleContainerFaq>

                <FaqBlockContainer>

                    <BoxMailing>
                        <Fragment>
                            <Accordion open={open === 1} animate={customAnimation}>
                                <AccordionHeader onClick={() => handleOpen(1)}>
                                   <AccordionText> What is Material Tailwind?</AccordionText>
                                </AccordionHeader>
                                <AccordionBody>
                                    We&apos;re not always in the position that we want to be at.
                                    We&apos;re constantly growing. We&apos;re constantly making mistakes.
                                    We&apos;re constantly trying to express ourselves and actualize our
                                    dreams.
                                </AccordionBody>
                            </Accordion>
                            <Accordion open={open === 2} animate={customAnimation}>
                                <AccordionHeader onClick={() => handleOpen(2)}>
                                    <AccordionText> How to use Material Tailwind? </AccordionText>
                                </AccordionHeader>
                                <AccordionBody>
                                    We&apos;re not always in the position that we want to be at.
                                    We&apos;re constantly growing. We&apos;re constantly making mistakes.
                                    We&apos;re constantly trying to express ourselves and actualize our
                                    dreams.
                                </AccordionBody>
                            </Accordion>
                            <Accordion open={open === 3} animate={customAnimation}>
                                <AccordionHeader onClick={() => handleOpen(3)}>
                                    <AccordionText> What can I do with Material Tailwind? </AccordionText>
                                </AccordionHeader>
                                <AccordionBody>
                                    We&apos;re not always in the position that we want to be at.
                                    We&apos;re constantly growing. We&apos;re constantly making mistakes.
                                    We&apos;re constantly trying to express ourselves and actualize our
                                    dreams.
                                </AccordionBody>
                            </Accordion>
                        </Fragment>
                    </BoxMailing>
                    <BoxMailing>
                        <FormMailing>
                            <FormTitle>
                                We would love to hear from you
                            </FormTitle>
                            <FormSubTitle>
                                Our personal advisors will walk you through
                                the full process step by step
                            </FormSubTitle>
                            <div className="flex flex-col w-72 items-end gap-2 my-8">
                                <Input size="md" label="Name" type={'text'}/> <br/>
                                <Input size="lg" label="Email" type={'email'}/><br/>
                                <Input size="lg" label="Tel" type={'number'}/><br/>
                                <Textarea label="Message"/> <br/>
                                <Button>Submit</Button>
                            </div>
                        </FormMailing>
                    </BoxMailing>
                </FaqBlockContainer>
            </FaqMainContainer>
        </div>
    )
}
export default FAQ