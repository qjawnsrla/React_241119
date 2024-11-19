import React, { useState } from "react";

// select 요소와 option 요소를 사용하여 드롭다운 메뉴를 구현
const DropDownComponent = () => {
  const [setlectValue, setSelectValue] = useState("");
  const [setlectValue_1, setSelectValue_1] = useState("");

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };
  const handleChange_1 = (e) => {
    setSelectValue_1(e.target.value);
  };
  const fruits = ["apple", "banana", "grape", "watermelon"];

  const fruit = [
    {
      value: "apple",
      text: "사과",
    },
    {
      value: "banana",
      text: "바나나",
    },
    {
      value: "grape",
      text: "포도",
    },
    {
      value: "watermelon",
      text: "수박",
    },
  ];

  return (
    <>
      <h1>드롭다운 예제</h1>
      <select value={setlectValue} onChange={handleChange}>
        <option value="" disabled>
          과일을 선택하세요.
        </option>
        <option value={fruits[0]}>사과</option>
        <option value={fruits[1]}>바나나</option>
        <option value={fruits[2]}>포도</option>
        <option value={fruits[3]}>수박</option>
        {/* <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="grape">포도</option>
        <option value="watermelon">수박</option> */}
      </select>
      <p>선택된 과일 : {setlectValue}</p>

      <h1>드롭다운 예제</h1>
      <select value={setlectValue_1} onChange={handleChange_1}>
        <option value="" disabled>
          과일을 선택하세요.
        </option>
        <option value={fruit[0].value}>{fruit[0].text}</option>
        <option value={fruit[1].value}>{fruit[1].text}</option>
        <option value={fruit[2].value}>{fruit[2].text}</option>
        <option value={fruit[3].value}>{fruit[3].text}</option>
      </select>
      <p>선택된 과일 : {setlectValue_1}</p>
    </>
  );
};

export default DropDownComponent;
