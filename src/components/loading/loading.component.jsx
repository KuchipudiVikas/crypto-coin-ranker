import { useEffect } from "react";
import { useState } from "react";

const Loading = () => {
    const [format, setFormat] = useState("loading");
    const showIcon = () => {
        while (5 > 0) {
            for (let i = 0; i < 3; i++) {
                setFormat("loading" + (i * "."))
            }
        }
    }
    useEffect(() => {
        showIcon()
    }, [])
    return (
        <>
            <h1>{format}</h1>
        </>
    )
}

export default Loading;