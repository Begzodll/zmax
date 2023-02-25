import {
    MainContainerProcess,
    BlockProcess, BoxProcess,
    NumberBoxProcess, TitleProcess,
    TextBodyProcess
} from "./Style/HeaderStyle";


const Process = () => {

    const data = [
        {
            id: 1,
            title: 'Pre-Move',
            body: 'It’s important to take all factors into consideration when deciding on\n' +
                'the best time for you to move.'
        },
        {
            id: 2,
            title: 'Pricing',
            body: 'It’s important to take all factors into consideration when deciding on\n' +
                'the best time for you to move.'
        },
        {
            id: 3,
            title: 'Packing',
            body: 'It’s important to take all factors into consideration when deciding on\n' +
                'the best time for you to move.'
        },
        {
            id: 4,
            title: 'Move Day',
            body: 'It’s important to take all factors into consideration when deciding on\n' +
                'the best time for you to move.'
        }
    ]

    return (
        <MainContainerProcess>
            <BlockProcess>
                {
                    data.map(item =>
                        <BoxProcess key={item.id}>
                            <NumberBoxProcess>{item.id}</NumberBoxProcess>
                            <TitleProcess>{item.title}</TitleProcess>
                            <TextBodyProcess>{item.body}</TextBodyProcess>
                        </BoxProcess>
                    )
                }
            </BlockProcess>
        </MainContainerProcess>
    )
}
export default Process