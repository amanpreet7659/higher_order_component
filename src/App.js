import logo from './logo.svg';
import './App.css';
import Increment from './Component/Increment';
import Decrement from './Component/Decrement';
import useInput from './hooks/useInput';
import React, { Suspense, useEffect, useState } from 'react';
import { arrComp } from './HOC/arrComp';
// import ContextTypeTry from './Component/contextTypeTry';

const ContextTypeTry = React.lazy(() => (import('./Component/contextTypeTry')))

function App() {
  const [arr, setArr] = useState([65, 45, 5, 4, 8, 2, 3, 1, 0, 9, 4, 9, 8, 5, 2, 1, 4, 2, 1, 4, 5, 2, 3, 6, 5, 2, 1, 4, 5, 2])
  const [firstname, setFirstName, firstreset] = useInput('')
  const [lastname, setLastName, lastreset] = useInput('')

  const arrIterator = (a) => {
    let indexval = 0
    return {
      next: () => {
        if (indexval < a.length) {
          return { value: arr[indexval++], done: false }
        } else {
          return { done: true }
        }
      }
    }
  }

  const handleSubmit = () => {
    alert(`Hi ${firstname} ${lastname}`)
  }

  function* generatorFun() {
    let i = 1
    while (true) {
      yield i++
    }
  }

  // useEffect(() => {
  //   const arr1 = [1, 2, 3, 4, 5, 7, 5, 8, 5, 8, 5, 6, 9,]
  //   const arrit = arrIterator(arr1)
  //   console.log(arrit.next())
  //   console.log(arrit.next())
  //   console.log(arrit.next())
  //   console.log(arrit.next())
  //   console.log(arrit.next())
  //   console.log(arrit.next())
  //   console.log(arrit.next())
  //   console.log(arrit.next())
  //   console.log(arrit.next())
  //   console.log(arrit.next())
  //   console.log(arrit.next())
  //   console.log(arrit.next())
  //   console.log(arrit.next())
  //   console.log(arrit.next())
  //   // arr.map((it, index) => {
  //   //   if (index + 1 <= arr.length) {
  //   //     console.log(index + 1, arr.length, arrit.next());
  //   //   }
  //   // })
  //   // const fn = generatorFun()
  //   // for (let i = 0; i < 100; i++) {
  //   //   console.log(Object.values(fn.next()));
  //   // }
  //   // arrComp(arr).map((d, index) => console.log(d, index.toString()))

  // }, [])

  // useEffect(() => {
  //   window.addEventListener("mousemove", () => { console.log("mousemove"); });
  //   return () => {
  //     // window.removeEventListener("mousemove", () => { console.log("mousemove"); })
  //   }
  // }, []);

  useEffect(() => {
    // for (let i = 1; i <= 5; i++) {
    //   setTimeout(function () {
    //     console.log('Value of i : ' + i);
    //   }, 100);
    // }

    // for (var i = 1; i <= 5; i++) {
    //   (function (i) {
    //     setTimeout(function () {
    //       console.log('Value of i : ' + i);
    //     }, 100);
    //   })(i);
    // }

    // var foo = function foo() {
    //   console.log(foo === foo);
    // };
    // foo();

    // function bar() {
    //   return foo;
    //   foo = 10;
    //   function foo() { }
    //   var foo = '11';
    // }

    // alert(typeof bar());

    // var myArr = ['foo', 'bar', 'baz'];
    // myArr.length = 0;
    // myArr.push('bin');
    // console.log(myArr);

    

  }, [])
  // function runPromise() {
  //   return Promise.reject("rejection reason");
  // }

  // function foo() {
  //   try { // Noncompliant, because
  //     runPromise();
  //   } catch (e) {
  //     console.log("Failed to run promise", e);
  //   }
  // }

  // foo()

  // async function foo() {
  //   try {
  //     await runPromise();
  //   } catch (e) {
  //     console.log("Failed to run promise", e);
  //   }
  // }
  // function foo() {
  //   runPromise().catch(e => console.log("Failed to run promise", e));
  // }

  // console.log('start')
  // setTimeout(() => {
  //   console.log('setTimeout')
  // })
  // Promise.resolve().then(() => {
  //   console.log('resolve')
  // })
  // console.log('end')



  return (
    <div className="App">
      {/*<Increment />
      <div>
        <label>First Name</label>
        <input type="text" {...setFirstName} />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" {...setLastName} />
      </div>
      <div>
        <button onClick={handleSubmit} >Submit</button>
      </div>
    <Decrement />*/}
      <Suspense fallback={<div>loadding...</div>}>
        <ContextTypeTry />
      </Suspense>
    </div>
  );
}

export default App;
