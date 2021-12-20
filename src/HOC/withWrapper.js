import { useState } from "react"

const withWrapper = (WrapperComponent) => {
    const WithWrapper = (props) => {
        const [state, setState] = useState(0)
        const [search, setSearch] = useState("")

        const increment = () => {
            setState(old => (old + 1))
        }
        const decrement = () => {
            setState(old => (old - 1))
        }

        const handleChange = (e) => {
            const { name, value } = e.target
            setSearch(value)
        }
        return <>
            <input onChange={handleChange} type={"text"} value={search} placeholder="Enter something" />

            <WrapperComponent
                state={state}
                search={search}
                increment={increment}
                decrement={decrement}
            /></>
    }

    return WithWrapper
}

export default withWrapper
