// 컴포넌트는 함수형 컴포넌트와 클래스형 컴포넌트가 있음
// 현재는 함수형 컴포넌트만 사용됨
// 예전에는 상태관리와 생명주기 관리를 위해서 클래스형 컴포넌트를 사용했지만 v16.8 이후부터 함수형 컴포넌트에서도 상태관리와 생명주기 관리가 가능해짐

import { Component, useState } from "react";
// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       number: 0,
//     };
//   }
//   render() {
//     const { number } = this.state;
//     return (
//       <>
//         <h1>{number}</h1>
//         <button onClick={() => this.setState({ number: number + 1 })}>
//           +1
//         </button>
//       </>
//     );
//   }
// }

// 상태 관리
const Counter = () => {
  const [number, setNumber] = useState(0); // 의존성 배열 - 내부적으로 주소가 바뀌면 랜더링되는 구조
  // let number = 0;
  // const setNumber = () => {
  //   number += 1;
  //   console.log(number);
  // };

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+1</button>
      {/* <button onClick={() => setNumber(number + 1)}>+1</button>
      <button onClick={() => setNumber(number - 1)}>-1</button> */}
    </>
  );
};

export default Counter;
