import styled from "styled-components";
import React, { useState, useEffect } from "react";

const Table = styled.table`
  border-collapse: collapse;
  background-color: antiquewhite;

  th,
  td {
    border: 1px solid #ccc;
    padding: 4px 8px;
    margin: 10px;
  }
  th {
    background-color: orangered;
    color: white;
  }
`;

const responseData = [
  {
    id: 1,
    name: "민지",
    addr: "서울시 강남구 신사동",
  },
  {
    id: 2,
    name: "햐니",
    addr: "서울시 강남구 역삼동",
  },
  {
    id: 3,
    name: "헤린",
    addr: "서울시 강남구 청담동",
  },
  {
    id: 4,
    name: "다니엘",
    addr: "서울시 강남구 삼성동",
  },
  {
    id: 5,
    name: "혜인",
    addr: "서울시 강남구 선릉동",
  },
];

// useState란?
// useState는 React 컴포넌트에서 상태를 관리하기 위해 사용되는 훅(Hook)입니다. 상태란 컴포넌트의 데이터 저장소 역할을 하며, UI에 영향을 미칩니다.

// const [state, setState] = useState(initialValue);
// state: 현재 상태 값을 나타냅니다.
// setState: 상태 값을 변경하는 함수입니다.
// initialValue: 상태의 초기값입니다.

const TableMap = () => {
  const [memberData, setMemberData] = useState([]); // 초기값으로 빈 배열 설정

  //setMemberData는 useState에서 반환된 함수로, memberData 상태 값을 변경하는 데 사용됩니다.

  // 상태 업데이트 과정
  // React의 상태는 변경될 때 컴포넌트를 재렌더링합니다. setMemberData를 호출하면
  // 1. React는 memberData 값을 새로운 값으로 업데이트합니다.
  // 2. 상태 변경으로 인해 컴포넌트가 다시 렌더링됩니다.
  // 3. 새로 렌더링된 UI는 업데이트된 상태 값을 반영합니다.
  useEffect(() => {
    setMemberData(responseData); // memberData의 값을 responseData로 변경
    // 이 때 서버와 비동기통신이 일어남
  }, []);

  //   왜 setMemberData가 필요한가?
  // React에서 상태는 직접 변경할 수 없습니다. 즉, 아래와 같은 코드는 React에서 동작하지 않습니다:

  // 예 ) memberData = responseData; // 잘못된 방법
  // React는 상태를 변경할 때 setState 함수(여기서는 setMemberData)를 사용해야 합니다. 이를 통해 React는 상태 변경 사실을 인지하고, 필요한 부분만 다시 렌더링할 수 있습니다.

  const handleTableRowClick = (item) => {
    console.log(item);
  };

  return (
    <Table>
      <tr>
        <th>ID</th>
        <th>이름</th>
        <th>주소</th>
      </tr>
      {memberData &&
        memberData.map((member, index) => (
          <tr key={index} onClick={() => handleTableRowClick(member)}>
            <td>{member.id}</td>
            <td>{member.name}</td>
            <td>{member.addr}</td>
          </tr>
        ))}
    </Table>
  );
};

export default TableMap;
