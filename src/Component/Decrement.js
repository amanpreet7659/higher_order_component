import withWrapper from "../HOC/withWrapper"

const Decrement = ({ state, decrement, search }) => {
    return (
        <div>
            <button onClick={decrement}>Decrement {state} {search}</button>
        </div>
    )
}

export default withWrapper(Decrement)
