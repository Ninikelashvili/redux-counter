import { increment, decrement, auth } from "../store/actions/actionCreators";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { AiOutlineLogout } from "react-icons/ai";

function CounterContent({ isLogged }) {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <CounterContentDiv>
      {isLogged ? (
        <>
          <LogoutBtn onClick={() => dispatch(auth())}>
            <AiOutlineLogout />
          </LogoutBtn>
          <p>Welcome! here is your counter </p>
          <h2> {counter}</h2>
          <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
          </div>
        </>
      ) : (
        ""
      )}
    </CounterContentDiv>
  );
}

const CounterContentDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10%;
  p {
    font-family: system-ui;
    font-weight: 100;
    font-size: 50px;
    letter-spacing: 2px;
    margin: 20px 0;
  }
  h2 {
    font-family: system-ui;
    font-weight: 300;
    padding: 20px 0;
  }
  div {
    button {
      min-width: 100px;
      padding: 10px 0;
      margin: 10px;
      cursor: pointer;
      border: none;
      outline: none;
      border-radius: 10px;
      font-size: 20px;
      font-weight: 200;
      transition: all 0.5s ease;
      :hover {
        box-shadow: 0 0 10px rgb(189, 142, 223);
      }
    }
  }
`;

const LogoutBtn = styled.button`
  position: absolute;
  top: 10%;
  right: 10%;
  font-size: 25px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default CounterContent;
