import { useState } from "react";

const EventPractice = () => {
  const [message, setMessage] = useState("안녕하세요.");
  const [userName, setUserName] = useState("");

  const changeMsg = (e) => {
    setMessage(e.target.value);
  };
  const onChangeUserName = (e) => setUserName(e.target.value);
  const onClick = () => {
    alert(`${userName} : ${message}`);
    setUserName(""); // 입력창 비우기
    setMessage("");
  };
  // Enter 키가 입력되면 onClick() 호출
  const onKeyPress = (e) => {
    if (e.key == "Enter") onClick();
  };

  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        placeholder="사용자명"
        onChange={onChangeUserName}
        value={userName}
      />
      <input
        type="text"
        placeholder="아무거나 입력"
        // onChange={(e) => changeMsg(e)} // e 값은 이벤트, 이렇게 전달하지 않아도 자동으로 전달된다
        onChange={changeMsg}
        value={message}
        onKeyDown={onKeyPress}
      />
      <button onclick={onClick}>확인</button>
      {/* <h2>입력받은 메시지 : {message}</h2> */}
    </>
  );
};

export default EventPractice;
