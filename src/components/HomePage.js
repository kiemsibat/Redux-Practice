import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewHobby } from "../actions/hobby";
import faker from "faker";
const HomePage = () => {
  const disPatch = useDispatch();
  const users = useSelector((state) => state.HobbyReducer.list);
  console.log(users);

  const onHandleClick = () => {
    const newList = {
      name: faker.name.findName(),
      id: parseInt(faker.address.zipCode()),
    };
    const action = addNewHobby(newList);
    disPatch(action);
  };

  return (
    <>
      <button onClick={onHandleClick}>OnClick</button>
      <ul>
        {users.map(({ name, id }) => {
          return <p key={id}>{name} - {id}</p>;
        })}
      </ul>
    </>
  );
};

export default HomePage;
