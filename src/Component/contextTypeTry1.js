import { useContext } from "react"
import { Consumer, MyContext } from "../services/context"

const ContextTypeTry1 = () => {
    const { changeState, changeToggle, state, toggle } = useContext(MyContext)
    console.log(useContext(MyContext))

    return (
        <div>
            {!toggle && <div>
                <input type="text" value={state} placeholder="Enter something" onChange={changeState} />
            </div>}
            <button className="btn btn-primary" onClick={changeToggle} >Click Me </button>
            {/*<Consumer>
                {(data) => (<>
                    {data.toggle && <div>
                        <input type="text" placeholder="Enter something" onChange={data.changeState} />
                    </div>}
                    <button onClick={data.changeToggle} >Click Me {console.log(data)}</button>
                </>
                )}
                    </Consumer>*/}
        </div>
    )
}

export default ContextTypeTry1
