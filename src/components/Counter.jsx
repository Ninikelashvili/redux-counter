import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../store/actions/actionCreators";
import { motion } from "framer-motion";
import CounterContent from "./CounterContent";

function Counter() {
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <CounterContainer
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isLogged ? (
        ""
      ) : (
        <LogInBtn onClick={() => dispatch(auth())}>Let's Count</LogInBtn>
      )}
      <CounterContent isLogged={isLogged} />
    </CounterContainer>
  );
}

const CounterContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogInBtn = styled.button`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  padding: 20px 35px;
  font-size: 20px;
  font-family: system-ui;
  font-weight: 200;
  letter-spacing: 2px;
  border-radius: 10px;
  cursor: pointer;
  border: solid 0.5px #fff;
  background: transparent;
  outline: none;
  transition: all 0.5s ease-in-out;
  :hover {
    box-shadow: 0 0 10px rgb(189, 142, 223);
    background: #fff;
    outline: none;
  }
`;

export default Counter;
