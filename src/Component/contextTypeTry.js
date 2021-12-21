import { useState } from "react"
import { Provider } from "../services/context"
import ContextTypeTry1 from "./contextTypeTry1"

const ContextTypeTry = () => {
    const [state, setState] = useState("Aman")
    const [toggle, setToggle] = useState(false)

    const changeToggle = () => {
        setToggle(!toggle)
    }

    const changeState = (e) => {
        setState(e.target.value)
    }

    const data = { state, changeState, toggle, changeToggle }
    return (
        <div>
            <Provider value={data}>
                <ContextTypeTry1 />
            </Provider>
        </div>
    )
}

export default ContextTypeTry
