import withWrapper from "../HOC/withWrapper"

const Decrement = ({ state, decrement, search }) => {

    // Recursion 

    // const logToConsole = (msg) => {
    //     console.log(msg);
    //     logToConsole(msg); // <- recursive function call
    // }
    // logToConsole("Hello World!");
    function MyComponent({ msg, currentIteration = 0 }) {
        return currentIteration ===84 ? null : (
          <p style={{ border: "3px solid #ccc", margin: 5 ,borderRadius:135}}>
            <h1>{msg}</h1>
            <MyComponent msg={msg} currentIteration={++currentIteration} />
          </p>
        );
      }
    // Pure function
    // function priceAfterTax(productPrice) {
    //     return (productPrice * 0.20) + productPrice;
    // }
    // console.log(priceAfterTax(12))

    // Currying example
    // function curry(f) {
    //     // curry(f) does the currying transform
    //     return function (a) {
    //         return function (b) {
    //             return function (c) {
    //                 return f(a, b, c);
    //             };
    //         };
    //     };
    // }

    // // usage
    // function sum(a, b, c) {
    //     return a + b + c;
    // }

    // let curriedSum = curry(sum);

    // alert(curriedSum(1)(2)(123)); // 3

    return (
        <div>
            <button onClick={decrement}>Decrement {state} {search}</button>
            {/*{MyComponent("Hello Everyone")}*/}
        </div>
    )
}

export default withWrapper(Decrement)
