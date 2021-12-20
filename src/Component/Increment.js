import withWrapper from "../HOC/withWrapper"

const Increment = (props) => {
    return (
        <div>
            <button onClick={props.increment} >Click {props.state} {props.search}</button>
        </div>
    )
}

export default withWrapper(Increment)
