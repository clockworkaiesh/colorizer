import { useState } from "react"

const Colorizer = () => {
    const [bgColor, setBgColor] = useState("white")
    const [colorText, setColorText] = useState("#fff")

    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
    const colorChanger = () =>{
        console.log('clicked')
        console.log(randomColor)
        setBgColor(randomColor)
        setColorText(randomColor)
    }
    return(
        <div>
            <div className="color--box" style={{backgroundColor: bgColor}}>{colorText}</div>
            <button className="changeColorBtn" onClick={colorChanger}>Change Color</button>
        </div>
    )
}

export default Colorizer