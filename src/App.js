import styled from "styled-components";
import Counter from "./components/Counter";

function App() {
  return (
    <AppContainer>
      <Counter />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 10px;
`;

export default App;
