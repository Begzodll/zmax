import {useCallback, useState, useEffect} from "react";

const TextChanging = () => {

    const texts = ['First', "Second", "Third"]

    const [text, setTexts] = useState('')

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * texts.length)
        setTexts(texts[index])
    })

    useEffect(()=>{
        const intId = setInterval(shuffle, 500)
        return ()=> clearInterval(intId)
    },[shuffle])

    return (
        <div>
            Item: {text}
        </div>
    )
}
export default TextChanging