import { useState } from "react";

const RadioButton = () => {
  const [setlectValue, setSelectValue] = useState("");

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };
  return (
    <>
      <label htmlFor="apple">
        <input
          type="radio"
          name="fruits"
          id="apple"
          value="apple"
          onChange={handleChange}
        />
        사과
      </label>
      <label htmlFor="banana">
        <input
          type="radio"
          name="fruits"
          id="banana"
          value="banana"
          onChange={handleChange}
        />
        바나나
      </label>
      <label htmlFor="strawberry">
        <input
          type="radio"
          name="fruits"
          id="strawberry"
          value="strawberry"
          onChange={handleChange}
        />
        딸기
      </label>
      <br />
      <p>선택된 과일 : {setlectValue}</p>
    </>
  );
};

export default RadioButton;
